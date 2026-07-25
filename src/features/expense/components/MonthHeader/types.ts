export interface MonthHeaderProps {
  selectedMonth: Date;

  onMonthPress?: () => void;

  onFilterPress?: () => void;

  onSearchPress?: () => void;
}