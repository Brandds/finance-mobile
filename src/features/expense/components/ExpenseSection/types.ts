import { ReactNode } from "react";

export interface ExpenseSectionProps {
  title: string;
  total: string;
  children: ReactNode;
}