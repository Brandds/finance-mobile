import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";
import { CategoryDTO, CategoryPage } from "../types/category.type";

export async function getByUserList(
    page: number = 0,
    size: number = 20,
    sort: string = "name,asc",
): Promise<ApiResponse<CategoryPage<CategoryDTO>>> {
    const response = await api.get<ApiResponse<CategoryPage<CategoryDTO>>>(
        "/categories",
        {
            params: {
                page,
                size,
                sort,
            },
        },
    );

    return response.data;
}
