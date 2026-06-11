import {
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import GlobalToast from "@/components/GlobalToast";

import {
  ToastContext,
} from "@/contexts/ToastContext";

import {
  ToastData,
} from "@/types/toast.types";

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({
  children,
}: ToastProviderProps) {
  const [visible, setVisible] = useState(false);

  const [toast, setToast] =
    useState<ToastData | null>(null);

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(
        null
    );

  const hideToast = useCallback(() => {
    setVisible(false);
  }, []);

  const showToast = useCallback(
    (data: ToastData) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setToast(data);
      setVisible(true);

      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, data.duration ?? 3000);
    },
    []
  );

  const value = useMemo(
    () => ({
      showToast,
      hideToast,
    }),
    [showToast, hideToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <GlobalToast
        visible={visible}
        toast={toast}
        onHide={hideToast}
      />
    </ToastContext.Provider>
  );
}