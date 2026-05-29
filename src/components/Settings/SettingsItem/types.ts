import React from "react";

export type SettingsItemProps = {
  icon: React.ReactNode;
  title: string;
  value?: string;
  onPress?: () => void;
  divider?: boolean;
  showChevron?: boolean;
};

