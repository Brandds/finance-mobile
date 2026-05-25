import { ROUTES } from "./routes";

export type RootStackParamList = {
  [ROUTES.LOGIN]: undefined;
  [ROUTES.REGISTER]: undefined;
  [ROUTES.HOME]: undefined;
  [ROUTES.NOTIFICATIONS]: undefined;
};


export type RootTabParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.EXPENSES]: undefined;
  [ROUTES.CATEGORIES]: undefined;
  [ROUTES.SUMMARY]: undefined;
};