import { ExpenseDTO } from "../types/expense.type";

export function getDefaultDateRange() {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1)
        .toISOString()
        .split("T")[0];
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0)
        .toISOString()
        .split("T")[0];

    return {
        startDate,
        endDate,
    };
}

export function normalizeExpenseResponse(payload: unknown): ExpenseDTO[] {
    if (Array.isArray(payload)) {
        return payload.filter(Boolean) as ExpenseDTO[];
    }

    if (payload && typeof payload === "object" && "content" in payload) {
        const content = (payload as { content?: unknown }).content;
        return Array.isArray(content)
            ? (content.filter(Boolean) as ExpenseDTO[])
            : [];
    }

    return payload ? [payload as ExpenseDTO] : [];
}

export function formatCurrencyValue(value: number) {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

export function sumExpensesByDate(expenses: ExpenseDTO[], targetDate: Date = new Date()) {
    const normalizedTargetDate = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate(),
    )
        .toISOString()
        .split("T")[0];

    return expenses.reduce((total, expense) => {
        if (!expense.date) {
            return total;
        }

        const expenseDate = new Date(expense.date);
        const normalizedExpenseDate = new Date(
            expenseDate.getFullYear(),
            expenseDate.getMonth(),
            expenseDate.getDate(),
        )
            .toISOString()
            .split("T")[0];

        if (normalizedExpenseDate !== normalizedTargetDate) {
            return total;
        }

        const amount = Number(expense.amount ?? 0);

        return total + (Number.isFinite(amount) ? Math.abs(amount) : 0);
    }, 0);
}

export function formatExpenseList(expenses: ExpenseDTO[]) {
    return expenses.map((expense) => ({
        ...expense,
        amountText:
            expense.amount != null
                ? `- R$ ${Number(expense.amount).toFixed(2).replace(".", ",")}`
                : "- R$ 0,00",
        dateText: expense.date
            ? new Date(expense.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
            })
            : "-",
    }));
}
