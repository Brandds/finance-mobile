import { createContext } from "react";

import { ToastData } from "@/types/toast.types";

export interface ToastContextData {
  showToast: (toast: ToastData) => void;
  hideToast: () => void;
}

export const ToastContext =
  createContext<ToastContextData | null>(null);