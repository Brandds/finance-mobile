import React from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "body1" | "body2";
  color?: string;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export type { TypographyProps };