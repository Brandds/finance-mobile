import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";
import { useNavigation, usePreventRemove } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Screen from "@/components/Screen/Screen";
import Input from "@/components/Input";
import Typography from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { useTheme } from "@/theme/ThemeProvider";
import { useToast } from "@/hooks/useToasts";
import { RootStackParamList } from "@/navigation/types/root-stack";
import { Category } from "@/features/category/types";
import { listCategories } from "@/features/category/services/category.service";
import { createExpense, listExpenseAccounts } from "../services/expense.service";
import { ExpenseAccount } from "../types/expense.type";
import { CreateExpenseFormData, createExpenseSchema, localExpenseDate, parseExpenseAmount } from "../schemas/createExpense.schema";
import { expenseError } from "../helper/expenseError";
import { addExpenseStyles } from "../styles/addExpense.styles";

export default function AddExpenseScreen() {
  const theme = useTheme();
  const styles = addExpenseStyles(theme);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { showToast } = useToast();
  const [categories, setCategories] = useState<Category[]>([]);
  const [accounts, setAccounts] = useState<ExpenseAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const locked = useRef(false);
  const { control, handleSubmit } = useForm<CreateExpenseFormData>({
    resolver: zodResolver(createExpenseSchema),
    defaultValues: { description: "", amount: "", date: localExpenseDate(), categoryId: null, accountId: null },
  });

  usePreventRemove(saving, () => {});
  useEffect(() => { if (saved) navigation.goBack(); }, [saved, navigation]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setLoadError(null);
    Promise.all([listCategories(), listExpenseAccounts()]).then(([categories, accounts]) => {
      if (active) { setCategories(categories); setAccounts(accounts); }
    }).catch(error => {
      if (active) setLoadError(expenseError(error));
    }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [attempt]);

  async function submit(values: CreateExpenseFormData) {
    if (locked.current || loading || loadError) return;
    locked.current = true;
    setSaving(true);
    setError(null);
    try {
      await createExpense({ ...values, amount: parseExpenseAmount(values.amount) });
      showToast({ title: "Sucesso", message: "Gasto criado com sucesso", type: "success" });
      setSaved(true);
    } catch (error) {
      setError(expenseError(error));
    } finally {
      locked.current = false;
      setSaving(false);
    }
  }

  return (
    <Screen scrollable>
      <View style={styles.form}>
        <Typography variant="h2">Novo gasto</Typography>
        <View style={styles.form} pointerEvents={saving || saved ? "none" : "auto"} accessibilityState={{ busy: saving }}>
          <Input control={control} name="description" label="Descrição" placeholder="Ex.: Padaria" />
          <Input control={control} name="amount" label="Valor (R$)" placeholder="Ex.: 14,00" keyboardType="decimal-pad" />
          <Input control={control} name="date" label="Data (AAAA-MM-DD)" placeholder="2026-11-10" keyboardType="numbers-and-punctuation" />
          {loading ? <ActivityIndicator color={theme.colors.primary} accessibilityLabel="Carregando categorias e contas" /> : loadError ? (
            <>
              <Typography color={theme.colors.error}>{loadError}</Typography>
              <Button title="Tentar novamente" onPress={() => setAttempt(value => value + 1)} />
            </>
          ) : (
            <>
              {(["categoryId", "accountId"] as const).map(name => (
                <Controller key={name} control={control} name={name} render={({ field, fieldState }) => {
                  const category = name === "categoryId";
                  const options = category ? categories : accounts;
                  return (
                    <View style={styles.form}>
                      <Typography>{category ? "Categoria (opcional)" : "Conta (opcional)"}</Typography>
                      {options.length === 0 && <Typography>{category ? "Nenhuma categoria cadastrada." : "Nenhuma conta cadastrada."}</Typography>}
                      <View style={styles.choices}>
                        {[{ id: null, name: category ? "Sem categoria" : "Sem conta" }, ...options].map(option => (
                          <Pressable key={option.id ?? "none"} accessibilityRole="radio" accessibilityState={{ selected: field.value === option.id }}
                            onPress={() => field.onChange(option.id)}
                            style={[styles.choice, field.value === option.id && styles.selected]}>
                            <Typography color={field.value === option.id ? theme.colors.onPrimary : theme.colors.text}>{option.name}</Typography>
                          </Pressable>
                        ))}
                      </View>
                      {fieldState.error && <Typography color={theme.colors.error}>{fieldState.error.message}</Typography>}
                    </View>
                  );
                }} />
              ))}
              {error && <Typography color={theme.colors.error}>{error}</Typography>}
              <Button title="Salvar gasto" loading={saving} onPress={handleSubmit(submit)} />
            </>
          )}
          <Button title="Cancelar" variant="ghost" onPress={() => { if (!locked.current) navigation.goBack(); }} />
        </View>
      </View>
    </Screen>
  );
}
