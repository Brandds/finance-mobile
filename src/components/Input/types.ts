import { Control, FieldValues, Path } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
  control: Control<T>;

  name: Path<T>;

  label: string;

  placeholder?: string;

  icon?: string;

  secureTextEntry?: boolean;
}