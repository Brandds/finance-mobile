import { filterExpenses, getExpenseAnalysis } from "@/features/expense/services/expense.service";
import { ExpenseDTO } from "@/features/expense/types/expense.type";

const PAGE_SIZE = 100;

function monthRange(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const date = (day: number) =>
    `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  return {
    startDate: date(1),
    endDate: date(new Date(year, monthIndex + 1, 0).getDate()),
  };
}

export async function getMonthlySummaryData(month: Date) {
  const range = monthRange(month);
  const previousRange = monthRange(new Date(month.getFullYear(), month.getMonth() - 1, 1));

  const [firstPage, previousAnalysis] = await Promise.all([
    filterExpenses({ ...range, page: 0, size: PAGE_SIZE, sort: "id,asc" }),
    getExpenseAnalysis(previousRange.startDate, previousRange.endDate),
  ]);

  if (!firstPage.data || !Array.isArray(firstPage.data.content)) {
    throw new Error("Resposta de despesas inválida.");
  }

  const expenses: ExpenseDTO[] = [...firstPage.data.content];
  const totalPages = firstPage.data.totalPages;
  if (!Number.isInteger(totalPages) || totalPages < 0) {
    throw new Error("Paginação de despesas inválida.");
  }

  for (let page = 1; page < totalPages; page += 1) {
    const response = await filterExpenses({ ...range, page, size: PAGE_SIZE, sort: "id,asc" });
    if (!response.data || !Array.isArray(response.data.content)) {
      throw new Error("Resposta de despesas inválida.");
    }
    expenses.push(...response.data.content);
  }

  const previousTotal = Number(previousAnalysis.data?.totalSpent);
  if (!Number.isFinite(previousTotal)) {
    throw new Error("Análise do mês anterior inválida.");
  }
  if (expenses.some((expense) => !Number.isFinite(Number(expense.amount)) || Number(expense.amount) < 0)) {
    throw new Error("Valor de despesa inválido.");
  }

  return { expenses, previousTotal };
}
