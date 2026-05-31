import { useAuthStore } from "@/store/auth/auth.store";

export function useProfile() {

  const signOut =
    useAuthStore(
      state => state.signOut
    );

  async function handleLogout() {
    await signOut();
  }

  return {
    handleLogout,
  };
}