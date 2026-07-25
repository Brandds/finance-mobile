export interface QuickExpenseInputProps {
  value: string;
  description: string;
  amount: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}