import React from "react";

export type SettingsItemProps = {
  icon: React.ReactNode;
  title: string;

  value?: string;

  rightContent?: React.ReactNode;

  onPress?: () => void;

  divider?: boolean;

  showChevron?: boolean;
};