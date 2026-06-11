import { ToastData } from "@/types/toast.types";

export interface GlobalToastProps {
  visible: boolean;
  toast: ToastData | null;
  onHide: () => void;
}