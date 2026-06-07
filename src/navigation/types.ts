import { ROUTES } from "./routes";

export type RootStackParamList = {
  [ROUTES.LOGIN]: undefined;
  [ROUTES.REGISTER]: undefined;
  [ROUTES.HOME]: undefined;
  [ROUTES.NOTIFICATIONS]: undefined;
  [ROUTES.PROFILE]: undefined;
  [ROUTES.EDIT_PROFILE]: undefined;
  [ROUTES.DAADOS_PESSOAIS]: undefined;
};


export type RootTabParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.EXPENSES]: undefined;
  [ROUTES.CATEGORIES]: undefined;
  [ROUTES.SUMMARY]: undefined;
};