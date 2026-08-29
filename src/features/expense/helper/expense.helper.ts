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
