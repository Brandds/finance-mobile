import { useCallback, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getApiErrorMessage } from "@/shared/utils/error.util";
import {
  getNotifications, getUnreadCount, markAllNotificationsRead,
  markNotificationRead, Notification,
} from "../services/notification.service";

export function useNotifications() {
  const [items, setItems] = useState<Notification[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [nextPage, setNextPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const locked = useRef(false);
  const generation = useRef(0);

  const load = useCallback(async (page = 0) => {
    if (locked.current) return;
    locked.current = true;
    const version = generation.current;
    setBusy(true);
    setError("");
    try {
      const [result, unread] = await Promise.all([getNotifications(page), getUnreadCount()]);
      if (version !== generation.current) return;
      setItems(previous => page === 0 ? result.content : [
        ...previous, ...result.content.filter(item => !previous.some(old => old.id === item.id)),
      ]);
      setCount(unread);
      setNextPage(result.number + 1);
      setHasMore(result.number + 1 < result.totalPages);
    } catch (cause) {
      if (version === generation.current) setError(getApiErrorMessage(cause));
    } finally {
      if (version === generation.current) {
        locked.current = false;
        setBusy(false);
        setLoading(false);
      }
    }
  }, []);

  useFocusEffect(useCallback(() => {
    void load();
    return () => {
      generation.current += 1;
      locked.current = false;
    };
  }, [load]));

  async function markRead(item?: Notification) {
    if (locked.current || item?.read) return;
    locked.current = true;
    const version = generation.current;
    setBusy(true);
    setError("");
    try {
      if (item) {
        const updated = await markNotificationRead(item.id);
        if (version !== generation.current) return;
        setItems(previous => previous.map(old => old.id === updated.id ? updated : old));
      } else {
        await markAllNotificationsRead();
        if (version !== generation.current) return;
        setItems(previous => previous.map(old => ({ ...old, read: true })));
      }
      // A mutation has succeeded; avoid displaying an obsolete count if refresh fails.
      setCount(null);
      const unread = await getUnreadCount();
      if (version === generation.current) setCount(unread);
    } catch (cause) {
      if (version === generation.current) setError(getApiErrorMessage(cause));
    } finally {
      if (version === generation.current) {
        locked.current = false;
        setBusy(false);
      }
    }
  }

  return { items, count, loading, busy, error, hasMore,
    refresh: () => load(), loadMore: () => load(nextPage), markRead };
}
