import { toastMessages, toastTitles } from "@/constants/toast.constants";
import { useToast } from "@/hooks/useToasts";
import { useAuthStore } from "@/store/auth/auth.store";

export function useProfile() {

  const signOut =
    useAuthStore(
      state => state.signOut
    );
  const { showToast } = useToast();

  async function handleLogout() {
    try {
      await signOut();
      showToast({
        title: toastTitles.SUCESSO,
        message: toastMessages.LOGOUT_REALIZADO,
        type: "success",
      });
    } catch {
      showToast({
        title: toastTitles.ERRO,
        message: toastMessages.ERRO_LOGOUT,
        type: "error",
      });
    }
  }

  return {
    handleLogout,
  };
}
