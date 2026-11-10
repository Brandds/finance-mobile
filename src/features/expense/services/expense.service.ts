import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";
import { ExpenseAnalysisDTO, ExpenseDTO, ExpensePage, ExpenseFilterParams } from "../types/expense.type";
import { CreateExpensePayload, ExpenseAccount } from "../types/expense.type";

export async function createExpense(payload: CreateExpensePayload) {
    const { data } = await api.post<ApiResponse<ExpenseDTO>>("/expenses", payload);
    return data.data;
}

export async function listExpenseAccounts() {
    const { data } = await api.get<ApiResponse<ExpenseAccount[]>>("/accounts/list");
    return data.data;
}

export async function getByDateRange(
    startDate: string,
    endDate: string,
): Promise<ApiResponse<ExpensePage<ExpenseDTO>>> {
    const response = await api.get<ApiResponse<ExpensePage<ExpenseDTO>>>(
        "/expenses/date-range",
        {
            params: {
                startDate,
                endDate,
            },
        },
    );

    return response.data;
}

export async function filterExpenses(
    params: ExpenseFilterParams,
): Promise<ApiResponse<ExpensePage<ExpenseDTO>>> {
    // O contrato da API usa categoryIds=1,2; uma seleção vazia omite o filtro.
    const { categoryIds, ...filters } = params;
    const queryParams = {
        ...filters,
        categoryIds: categoryIds?.length ? categoryIds.join(",") : undefined,
    };

    const response = await api.get<ApiResponse<ExpensePage<ExpenseDTO>>>(
        "/expenses/filter",
        { params: queryParams },
    );

    return response.data;
}

export async function getExpenseAnalysis(
    startDate: string,
    endDate: string,
): Promise<ApiResponse<ExpenseAnalysisDTO>> {
    const response = await api.get<ApiResponse<ExpenseAnalysisDTO>>(
        "/expenses/get-expense-analysis",
        {
            params: {
                startDate,
                endDate,
            },
        },
    );

    return response.data;
}
