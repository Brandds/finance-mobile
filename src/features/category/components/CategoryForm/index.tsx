import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, Modal, Platform, ScrollView, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button/Button";
import Input from "@/components/Input";
import Typography from "@/components/Typography/Typography";
import { useTheme } from "@/theme/ThemeProvider";
import { Category, CategoryIcon, CategoryPayload, categoryIcons } from "../../types";
import { getCategory } from "../../services/category.service";
import { categoryError } from "../../hooks/useCategories";
import CategorySuggestionList from "../CategorySuggestionList";
import { categorySchema, CategoryFormData } from "./schema";
import { styles as createStyles } from "../../styles";

type Props = {
  category: Category | null;
  onClose: () => void;
  onSave: (payload: CategoryPayload, id?: number) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
};

export default function CategoryForm({ category, onClose, onSave, onDelete }: Props) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [loading, setLoading] = useState(!!category);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const locked = useRef(false);
  const { control, reset, handleSubmit, watch, setValue } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: "", icon: "FOOD" },
  });

  useEffect(() => {
    if (!category) return;
    let active = true;
    setLoading(true);
    setLoadError(null);
    getCategory(category.id).then(result => {
      if (active) reset({ name: result.name, icon: result.icon });
    }).catch(error => {
      if (active) setLoadError(categoryError(error));
    }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [category, reset, attempt]);

  async function submit(action: () => Promise<void>) {
    if (locked.current) return;
    locked.current = true;
    setBusy(true);
    setError(null);
    try {
      await action();
      onClose();
    } catch (error) {
      setError(categoryError(error));
    } finally {
      locked.current = false;
      setBusy(false);
    }
  }

  return (
    <Modal visible animationType="slide" onRequestClose={() => { if (!locked.current) onClose(); }}>
      <KeyboardAvoidingView style={styles.modal} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
          <Typography variant="h2">{category ? "Detalhes da categoria" : "Nova categoria"}</Typography>
          {loading ? <ActivityIndicator color={theme.colors.primary} accessibilityLabel="Carregando categoria" /> : loadError ? (
            <View style={styles.feedback}>
              <Typography color={theme.colors.error}>{loadError}</Typography>
              <Button title="Tentar novamente" onPress={() => setAttempt(value => value + 1)} />
            </View>
          ) : (
            <View pointerEvents={busy ? "none" : "auto"} accessibilityState={{ busy }} style={styles.feedback}>
              <Input control={control} name="name" label="Nome" placeholder="Nome da categoria" />
              <Typography>Ícone</Typography>
              {category ? (
                <Typography>{category.icon ? categoryIcons[category.icon]?.label ?? "Categoria" : "Sem ícone"}</Typography>
              ) : (
                <CategorySuggestionList
                  data={Object.entries(categoryIcons).map(([id, value]) => ({ id, label: value.label }))}
                  selectedId={watch("icon")}
                  onSelect={id => setValue("icon", id as CategoryIcon, { shouldValidate: true })}
                />
              )}
              {error && <Typography color={theme.colors.error}>{error}</Typography>}
              <Button title="Salvar categoria" loading={busy} onPress={handleSubmit(values => submit(() => onSave(values, category?.id)))} />
              {category && (confirmDelete ? (
                <View style={styles.feedback}>
                  <Typography>Excluir esta categoria? Essa ação não pode ser desfeita.</Typography>
                  <Button title="Confirmar exclusão" onPress={() => submit(() => onDelete(category.id))} />
                  <Button title="Manter categoria" variant="ghost" onPress={() => setConfirmDelete(false)} />
                </View>
              ) : <Button title="Excluir categoria" variant="secondary" onPress={() => setConfirmDelete(true)} />)}
            </View>
          )}
          <Button title="Voltar" variant="ghost" onPress={() => { if (!locked.current) onClose(); }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}
