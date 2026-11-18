import { useRef, useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useToast } from "@/hooks/useToasts";
import { useAuthStore } from "@/store/auth/auth.store";
import { deleteAvatar, getProfile, uploadAvatar } from "../service/user.service";

export function useAvatar() {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [busy, setBusy] = useState(false);
  const [canRemove, setCanRemove] = useState(false);
  const lock = useRef(false);
  const { showToast } = useToast();

  const notify = (message: string, type: "success" | "error") => {
    showToast({ title: type === "success" ? "Sucesso" : "Erro", message, type });
  };

  async function chooseImage() {
    if (lock.current) return;
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.9,
      });
      if (result.canceled) return;
      const selected = result.assets[0];
      const mime = selected.mimeType?.toLowerCase();
      if (!mime || !["image/jpeg", "image/png", "image/webp"].includes(mime)) {
        notify("Escolha uma imagem JPEG, PNG ou WebP.", "error");
      } else if (selected.fileSize && selected.fileSize > 2 * 1024 * 1024) {
        notify("A foto deve ter no máximo 2 MB.", "error");
      } else if (selected.width > 2048 || selected.height > 2048) {
        notify("A foto deve ter até 2048 × 2048 pixels.", "error");
      } else {
        setImage(selected);
      }
    } catch {
      notify("Não foi possível acessar a galeria. Verifique a permissão de fotos.", "error");
    }
  }

  async function perform(action: "upload" | "delete"): Promise<boolean> {
    if (lock.current || (action === "upload" && !image)) return false;
    lock.current = true;
    setBusy(true);
    const { token, userResponse } = useAuthStore.getState();
    try {
      if (action === "upload" && image) {
        const extension = image.mimeType === "image/png" ? "png" : image.mimeType === "image/webp" ? "webp" : "jpg";
        await uploadAvatar({ uri: image.uri, name: image.fileName ?? `avatar.${extension}`, type: image.mimeType! });
      } else {
        await deleteAvatar();
      }
      const profile = await getProfile();
      const current = useAuthStore.getState();
      if (current.token === token && current.userResponse?.id === userResponse?.id) {
        await current.updateUser(profile);
        setCanRemove(action === "upload");
        setImage(null);
        notify(action === "upload" ? "Foto atualizada." : "Foto removida.", "success");
        return true;
      }
    } catch (error) {
      const status = axios.isAxiosError(error) ? error.response?.status : undefined;
      const message = status === 401 ? "Sua sessão expirou. Entre novamente."
        : status === 503 ? "O serviço de imagens está indisponível. Tente mais tarde."
        : [400, 413, 415].includes(status ?? 0) ? "Imagem inválida ou acima do limite de 2 MB."
        : "Não foi possível atualizar a foto. Verifique sua conexão.";
      notify(message, "error");
      return false;
    } finally {
      lock.current = false;
      setBusy(false);
    }
    return false;
  }

  function confirmRemove() {
    if (!canRemove || lock.current) return;
    Alert.alert("Remover foto?", "Sua foto anterior pode voltar a aparecer.", [
      { text: "Cancelar", style: "cancel" },
      { text: "Remover", style: "destructive", onPress: () => perform("delete") },
    ]);
  }

  return { image, busy, canRemove, chooseImage, upload: () => perform("upload"), confirmRemove, cancel: () => setImage(null) };
}
