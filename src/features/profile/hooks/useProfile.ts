import { useToast } from "@/hooks/useToasts";
import { useAuthStore } from "@/store/auth/auth.store";

export function useProfile() {

  const signOut =
    useAuthStore(
      state => state.signOut
    );
  const { showToast } = useToast();

  async function handleLogout() {
    await signOut();
    showToast({
      title: "Sucesso",
      message: "Logout realizado com sucesso",
      type: "success",
    });
  }

  return {
    handleLogout,
  };
}