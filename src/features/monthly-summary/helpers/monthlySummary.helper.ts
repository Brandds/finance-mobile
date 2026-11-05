import { ExpenseDTO } from "@/features/expense/types/expense.type";
import { CategorySummaryProps } from "../components/CategorySummary";

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatMoney(cents: number) {
  return moneyFormatter.format(cents / 100);
}

export function buildMonthlySummary(expenses: ExpenseDTO[], previousTotal: number, color: string) {
  const groups = new Map<string, { id: number; title: string; cents: number }>();

  for (const expense of expenses) {
    const amount = Number(expense.amount);

    const id = expense.categoryId;
    const key = id == null ? "uncategorized" : String(id);
    const current = groups.get(key);
    const cents = Math.round(amount * 100);
    if (current) {
      current.cents += cents;
    } else {
      groups.set(key, {
        id: id ?? -1,
        title: expense.categoryName?.trim() || "Sem categoria",
        cents,
      });
    }
  }

  const sorted = [...groups.values()].sort((a, b) => b.cents - a.cents || a.title.localeCompare(b.title));
  const totalCents = sorted.reduce((sum, group) => sum + group.cents, 0);
  const exactPercentages = sorted.map((group) => totalCents > 0 ? (group.cents / totalCents) * 100 : 0);
  const percentages = exactPercentages.map(Math.floor);
  const remaining = totalCents > 0 ? 100 - percentages.reduce((sum, value) => sum + value, 0) : 0;
  const byRemainder = exactPercentages
    .map((value, index) => ({ index, fraction: value - percentages[index] }))
    .sort((a, b) => b.fraction - a.fraction || a.index - b.index);
  for (let index = 0; index < remaining; index += 1) {
    percentages[byRemainder[index].index] += 1;
  }
  const categories: CategorySummaryProps[] = sorted.map((group, index) => ({
    id: group.id,
    title: group.title,
    amount: formatMoney(group.cents),
    percentage: percentages[index],
    icon: group.id === -1 ? "payments" : "category",
    color,
  }));

  const previousCents = Math.round(previousTotal * 100);
  const difference = totalCents - previousCents;
  const percentage = previousCents > 0 ? Math.round((Math.abs(difference) / previousCents) * 100) : null;
  const trend = previousCents === 0
    ? totalCents === 0 ? "Sem gastos nos dois meses" : "Sem gastos no mês anterior"
    : difference === 0
      ? "Mesmo total do mês anterior"
      : `${percentage}% ${difference > 0 ? "a mais" : "a menos"} que no mês anterior`;

  const largest = sorted[0];
  const insight = largest && totalCents > 0
    ? `${largest.title} foi a maior categoria: ${formatMoney(largest.cents)} (${categories[0].percentage}% do total).`
    : "Nenhuma despesa registrada neste mês.";

  return { totalCents, categories, trend, insight, difference };
}
