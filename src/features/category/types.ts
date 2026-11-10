export const categoryIcons = {
  FOOD: { label: "Alimentação", icon: "restaurant" },
  TRANSPORT: { label: "Transporte", icon: "directions-car" },
  LEISURE: { label: "Lazer", icon: "celebration" },
  HEALTH: { label: "Saúde", icon: "local-hospital" },
  HOME: { label: "Casa", icon: "home" },
  EDUCATION: { label: "Educação", icon: "school" },
  SHOPPING: { label: "Compras", icon: "shopping-bag" },
  BILLS: { label: "Contas", icon: "receipt" },
} as const;

export type CategoryIcon = keyof typeof categoryIcons;
export type Category = { id: number; name: string; icon: CategoryIcon | null };
export type CategoryPayload = { name: string; icon: CategoryIcon | null };
