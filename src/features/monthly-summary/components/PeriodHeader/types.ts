export interface PeriodHeaderProps {
  title: string;
  period: string;

  onPrevious?: () => void;
  onNext?: () => void;
}