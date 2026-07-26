export interface ConfirmExpenseFooterProps {
  loading?: boolean;
  confirmText?: string;
  cancelText?: string;

  onConfirm: () => void;
  onCancel?: () => void;
}