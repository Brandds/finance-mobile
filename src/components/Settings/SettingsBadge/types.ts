export type SettingsBadgeVariant =
  | "success"
  | "primary"
  | "warning"
  | "error";

export type SettingsBadgeProps = {
  label: string;
  variant?: SettingsBadgeVariant;
};