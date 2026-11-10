import { api } from "@/services/api";
import { ApiResponse } from "@/shared/types/apiResponse";
import { Category, CategoryPayload } from "../types";

export async function listCategories() {
  const { data } = await api.get<ApiResponse<Category[]>>("/categories/list");
  return data.data;
}

export async function getCategory(id: number) {
  const { data } = await api.get<ApiResponse<Category>>(`/categories/${id}`);
  return data.data;
}

export async function saveCategory(payload: CategoryPayload, id?: number) {
  const { data } = id === undefined
    ? await api.post<ApiResponse<Category>>("/categories", payload)
    : await api.put<ApiResponse<Category>>(`/categories/${id}`, payload);
  return data.data;
}

export async function deleteCategory(id: number) {
  await api.delete(`/categories/${id}`);
}
