import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";

export type Notification = {
  id: number;
  type: "BUDGET_ALERT" | "SECURITY_ALERT";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  readAt: string | null;
};

export type NotificationPage = {
  content: Notification[];
  number: number;
  totalPages: number;
};

export async function getNotifications(page: number) {
  const response = await api.get<ApiResponse<NotificationPage>>("/notifications", {
    params: { page, size: 20 },
  });
  return response.data.data;
}

export async function getUnreadCount() {
  const response = await api.get<ApiResponse<number>>("/notifications/unread-count");
  return response.data.data;
}

export async function markNotificationRead(id: number) {
  const response = await api.patch<ApiResponse<Notification>>(`/notifications/${id}/read`);
  return response.data.data;
}

export async function markAllNotificationsRead() {
  await api.patch("/notifications/read-all");
}
