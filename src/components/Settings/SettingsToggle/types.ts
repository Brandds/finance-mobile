import React from "react";

export type SettingsToggleProps = {
  icon: React.ReactNode;
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  divider?: boolean;
};