import React, { forwardRef, useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AppBottomSheet from "@/components/BottomSheet";
import { AppBottomSheetRef } from "@/components/BottomSheet/types";
import Typography from "@/components/Typography/Typography";
import Input from "@/components/Input";
import { useTheme } from "@/theme/ThemeProvider";
import { Button } from "@/components";

import { expenseFilterSchema, ExpenseFilterFormData } from "./schema";
import { styles as createStyles } from "./styles";
import { PeriodType, ExpenseFilterParams } from "../../types/expense.type";
import { CategoryDTO } from "@/features/category/types/category.type";
import { getByUserList } from "@/features/category/services/category.service";
import {
  PERIOD_OPTIONS,
  DEFAULT_FILTER_FORM_VALUES,
  parseFilterFormDataToParams,
  toggleCategoryId,
  formatDateMask,
  formatCurrencyMask,
} from "../../helper/expenseFilter.helper";

export interface ExpenseFilterSheetProps {
  onApplyFilters: (filters: ExpenseFilterParams | undefined) => void;
}

const ExpenseFilterSheet = forwardRef<AppBottomSheetRef, ExpenseFilterSheetProps>(
  function ExpenseFilterSheet({ onApplyFilters }, ref) {
    const theme = useTheme();
    const styles = createStyles(theme);

    const {
      control,
      handleSubmit,
      watch,
      setValue,
      reset,
    } = useForm<ExpenseFilterFormData>({
      resolver: zodResolver(expenseFilterSchema),
      defaultValues: DEFAULT_FILTER_FORM_VALUES,
    });

    const selectedPeriod = watch("periodType");
    const selectedCategoryIds = watch("categoryIds") ?? [];

    const handleApply = (data: ExpenseFilterFormData) => {
      const parsedFilters = parseFilterFormDataToParams(data);

      onApplyFilters(parsedFilters);
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.dismiss();
      }
    };

    const toggleCategory = (id: number) => {
      setValue("categoryIds", toggleCategoryId(selectedCategoryIds, id));
    };

    const clearFilters = () => {
      reset(DEFAULT_FILTER_FORM_VALUES);
      onApplyFilters(undefined);
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.dismiss();
      }
    };

    const renderPeriodChips = () => {
      return PERIOD_OPTIONS.map((period) => {
        const isActive = selectedPeriod === period.value;
        return (
          <TouchableOpacity
            key={period.value}
            style={[styles.chip, isActive ? styles.chipSelected : null]}
            onPress={() => setValue("periodType", period.value)}
          >
            <Typography
              variant="body2"
              style={isActive ? styles.chipTextSelected : styles.chipText}
            >
              {period.label}
            </Typography>
          </TouchableOpacity>
        );
      });
    };

    const [categories, setCategories] = useState<CategoryDTO[]>([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await getByUserList(0, 50, "name,asc");
          if (response?.data?.content) {
            setCategories(response.data.content);
          }
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchCategories();
    }, []);

    const renderCategoryChips = () => {
      return categories.map((category) => {
        const isSelected = selectedCategoryIds.includes(category.id);
        return (
          <TouchableOpacity
            key={category.id}
            style={[styles.chip, isSelected ? styles.chipSelected : null]}
            onPress={() => toggleCategory(category.id)}
          >
            <Typography
              variant="body2"
              style={isSelected ? styles.chipTextSelected : styles.chipText}
            >
              {category.name}
            </Typography>
          </TouchableOpacity>
        );
      });
    };

    const renderCustomDateInputs = () => {
      if (selectedPeriod !== PeriodType.CUSTOM) {
        return null;
      }

      return (
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Input
              control={control}
              name="startDate"
              label="Data inicial"
              placeholder="DD/MM/YYYY"
              mask={formatDateMask}
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.flex1}>
            <Input
              control={control}
              name="endDate"
              label="Data final"
              placeholder="DD/MM/YYYY"
              mask={formatDateMask}
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        </View>
      );
    };

    return (
      <AppBottomSheet ref={ref} snapPoints={["85%"]}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Typography variant="h2">{"Filtros"}</Typography>
            <TouchableOpacity onPress={clearFilters}>
              <Typography variant="body2" color={theme.colors.primary}>
                {"Limpar"}
              </Typography>
            </TouchableOpacity>
          </View>
          <Typography variant="body1" style={styles.sectionTitle}>
            {"Período"}
          </Typography>
          <View style={styles.chipContainer}>{renderPeriodChips()}</View>
          {renderCustomDateInputs()}
          <Typography variant="body1" style={styles.sectionTitle}>
            {"Valor"}
          </Typography>
          <View style={styles.row}>
            <View style={styles.flex1}>
              <Input
                control={control}
                name="minAmount"
                label="Mínimo"
                placeholder="0,00"
                mask={formatCurrencyMask}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.flex1}>
              <Input
                control={control}
                name="maxAmount"
                label="Máximo"
                placeholder="0,00"
                mask={formatCurrencyMask}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Typography variant="body1" style={styles.sectionTitle}>
            {"Categorias"}
          </Typography>
          <View style={styles.chipContainer}>{renderCategoryChips()}</View>
          <View style={styles.footer}>
            <Button title="Aplicar Filtros" onPress={handleSubmit(handleApply)} />
          </View>
        </ScrollView>
      </AppBottomSheet>
    );
  }
);

ExpenseFilterSheet.displayName = "ExpenseFilterSheet";

export default ExpenseFilterSheet;


