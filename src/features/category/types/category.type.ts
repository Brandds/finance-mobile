export enum CategoryIconEnum {
  FOOD = "FOOD",
  TRANSPORT = "TRANSPORT",
  LEISURE = "LEISURE",
  HEALTH = "HEALTH",
  HOME = "HOME",
  EDUCATION = "EDUCATION",
  SHOPPING = "SHOPPING",
  BILLS = "BILLS",
}

export interface CategoryDTO {
  id: number;
  name: string;
  icon: CategoryIconEnum;
}

export interface CategoryPage<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
