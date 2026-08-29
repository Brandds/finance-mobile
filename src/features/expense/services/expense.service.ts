
import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";
import { ExpenseDTO, ExpensePage } from "../types/expense.type";

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