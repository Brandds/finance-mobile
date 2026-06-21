export type CategorySuggestionChipProps = {
  id: string;
  label: string;
  selected?: boolean;
  onPress?: (id: string) => void;
};