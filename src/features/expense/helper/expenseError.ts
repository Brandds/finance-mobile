import { isAxiosError } from "axios";

export function expenseError(error: unknown) {
  if (isAxiosError(error)) {
    if (error.response?.status === 401) return "Sua sessão expirou. Entre novamente.";
    const message = error.response?.data?.message;
    if (typeof message === "string" && message.trim()) return message;
  }
  return "Não foi possível concluir a operação. Tente novamente.";
}
