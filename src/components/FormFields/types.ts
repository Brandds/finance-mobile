export interface FieldConfig {
  name: string;

  label: string;

  placeholder?: string;

  icon?: string;

  library?: "material" | "fontAwesome";

  secureTextEntry?: boolean;
}