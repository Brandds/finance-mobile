import { useCallback, useRef, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFocusEffect, usePreventRemove } from "@react-navigation/native";
import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { RootStackParamList } from "@/navigation/types/root-stack";
import { ROUTES } from "@/navigation/routes";
import { useTheme } from "@/theme/ThemeProvider";
import { useToast } from "@/hooks/useToasts";
import { getExpense, deleteExpense, listExpenseAccounts } from "../services/expense.service";
import { ExpenseDTO } from "../types/expense.type";
import { expenseError } from "../helper/expenseError";
import { formatCurrencyValue } from "../helper/expense.helper";
import { addExpenseStyles } from "../styles/addExpense.styles";

export default function ExpenseDetailsScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, typeof ROUTES.EXPENSE_DETAILS>) {
  const theme = useTheme();
  const styles = addExpenseStyles(theme);
  const { showToast } = useToast();
  const [expense, setExpense] = useState<ExpenseDTO | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const locked = useRef(false);
  usePreventRemove(deleting, () => {});
  useFocusEffect(useCallback(() => {
    let active = true;
    setLoading(true);
    setError(null);
    setConfirming(false);
    Promise.all([getExpense(route.params.expenseId), listExpenseAccounts().catch(() => [])])
      .then(([data, accounts]) => {
        if (!active) return;
        setExpense(data);
        setAccount(accounts.find(account => account.id === data.accountId)?.name ?? null);
      }).catch(error => { if (active) { setExpense(null); setError(expenseError(error)); } })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [route.params.expenseId, attempt]));

  // Wait for navigation to be unblocked before leaving after deletion.
  useFocusEffect(useCallback(() => { if (deleted && !deleting) navigation.goBack(); }, [deleted, deleting, navigation]));

  async function remove() {
    if (locked.current || !confirming || deleted) return;
    locked.current = true;
    setDeleting(true);
    setError(null);
    try {
      await deleteExpense(route.params.expenseId);
      showToast({ title: "Sucesso", message: "Gasto excluído com sucesso", type: "success" });
      setDeleted(true);
    } catch (error) { setError(expenseError(error)); }
    finally { setDeleting(false); locked.current = false; }
  }

  return <Screen scrollable>
    <View style={styles.form}>
      {loading ? <ActivityIndicator color={theme.colors.primary} accessibilityLabel="Carregando gasto" /> : expense ? <>
        <Typography variant="h2">{expense.description}</Typography>
        <Typography>Valor: {formatCurrencyValue(expense.amount)}</Typography>
        <Typography>Data: {expense.date.slice(0, 10).split("-").reverse().join("/")}</Typography>
        <Typography>Categoria: {expense.categoryName ?? (expense.categoryId === null ? "Sem categoria" : `Categoria #${expense.categoryId}`)}</Typography>
        <Typography>Conta: {account ?? (expense.accountId === null ? "Sem conta" : `Conta #${expense.accountId}`)}</Typography>
        <View style={styles.form} pointerEvents={deleting || deleted ? "none" : "auto"} accessibilityState={{ busy: deleting }}>
          {confirming ? <>
            <Typography>Excluir este gasto? Esta ação não pode ser desfeita.</Typography>
            <Button title="Confirmar exclusão" loading={deleting} onPress={() => void remove()} />
            <Button title="Cancelar exclusão" variant="ghost" onPress={() => setConfirming(false)} />
          </> : <>
            <Button title="Editar gasto" onPress={() => navigation.navigate(ROUTES.EDIT_EXPENSE, { expenseId: route.params.expenseId })} />
            <Button title="Excluir gasto" variant="secondary" onPress={() => setConfirming(true)} />
          </>}
        </View>
      </> : null}
      {error && <Typography color={theme.colors.error}>{error}</Typography>}
      {!loading && !expense && <Button title="Tentar novamente" onPress={() => setAttempt(value => value + 1)} />}
    </View>
  </Screen>;
}
