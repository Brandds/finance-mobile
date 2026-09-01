export interface MonthPickerSheetProps {
  selectedMonth: Date;
  onSelect: (date: Date) => void;
}