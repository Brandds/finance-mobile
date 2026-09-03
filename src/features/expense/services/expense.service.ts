import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";
import { ExpenseAnalysisDTO, ExpenseDTO, ExpensePage, ExpenseFilterParams } from "../types/expense.type";

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
    // Transform categoryIds into a format that paramsSerializer handles well, or just pass it 
    // Usually axios handles arrays as categoryIds[]=1&categoryIds[]=2, but some APIs expect categoryIds=1,2
    // Let's pass the params directly first. If the API strictly expects a comma-separated string, we can do:
    // const queryParams = { ...params, categoryIds: params.categoryIds?.join(",") };
    const queryParams = { ...params };
    if (queryParams.categoryIds && queryParams.categoryIds.length > 0) {
        queryParams.categoryIds = queryParams.categoryIds.join(",") as any;
    }

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
