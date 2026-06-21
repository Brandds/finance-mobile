
export type Category = {
  id: string;
  label: string;
};

export type CategorySuggestionListProps = {
  data: Category[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
};