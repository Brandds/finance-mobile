import React from "react";

export interface ScreenProps {
  children: React.ReactNode;

  scrollable?: boolean;

  padding?: boolean;

  centered?: boolean;

  backgroundColor?: string;
}