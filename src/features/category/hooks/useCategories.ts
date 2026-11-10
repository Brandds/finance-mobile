import { useCallback, useEffect, useRef, useState } from "react";
import { isAxiosError } from "axios";
import { Category, CategoryPayload } from "../types";
import * as service from "../services/category.service";

export function categoryError(error: unknown) {
  if (isAxiosError(error)) {
    if (error.response?.status === 401) return "Sua sessão expirou. Entre novamente.";
    const message = error.response?.data?.message;
    if (typeof message === "string" && message.trim()) return message;
  }
  return "Não foi possível concluir a operação. Tente novamente.";
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const request = useRef(0);

  const refetch = useCallback(async () => {
    const current = ++request.current;
    setLoading(true);
    setError(null);
    try {
      const result = await service.listCategories();
      if (current === request.current) setCategories(result);
    } catch (error) {
      if (current === request.current) setError(categoryError(error));
    } finally {
      if (current === request.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refetch();
    return () => { ++request.current; };
  }, [refetch]);

  async function save(payload: CategoryPayload, id?: number) {
    const result = await service.saveCategory(payload, id);
    ++request.current;
    setLoading(false);
    setError(null);
    setCategories(items => id === undefined
      ? [...items, result]
      : items.map(item => item.id === id ? result : item));
  }

  async function remove(id: number) {
    await service.deleteCategory(id);
    ++request.current;
    setLoading(false);
    setError(null);
    setCategories(items => items.filter(item => item.id !== id));
  }

  return { categories, loading, error, refetch, save, remove };
}
