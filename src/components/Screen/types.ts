import { ReactNode } from "react";

export type ScreenProps = {
  children: ReactNode;

  scrollable?: boolean;
  padding?: boolean;
  centered?: boolean;

  backgroundColor?: string;

  headerTitle?: string;
  showBackButton?: boolean;
};