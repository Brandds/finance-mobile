import React, { forwardRef } from "react";
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
import { categoriesMock } from "@/mocks/categoriesMock";

export interface ExpenseFilterSheetProps {
  onApplyFilters: (filters: ExpenseFilterParams | undefined) => void;
}

const PERIOD_OPTIONS = [
  { label: "Hoje", value: PeriodType.TODAY },
  { label: "Últimos 7 dias", value: PeriodType.LAST_7_DAYS },
  { label: "Mês atual", value: PeriodType.CURRENT_MONTH },
  { label: "Personalizado", value: PeriodType.CUSTOM },
];

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
      defaultValues: {
        categoryIds: [],
      },
    });

    const selectedPeriod = watch("periodType");
    const selectedCategoryIds = watch("categoryIds") ?? [];

    const handleApply = (data: ExpenseFilterFormData) => {
      const parsedFilters: ExpenseFilterParams = {
        categoryIds: data.categoryIds,
        periodType: data.periodType,
        startDate: data.periodType === PeriodType.CUSTOM ? data.startDate : undefined,
        endDate: data.periodType === PeriodType.CUSTOM ? data.endDate : undefined,
        minAmount: data.minAmount ? Number(data.minAmount.replace(",", ".")) : undefined,
        maxAmount: data.maxAmount ? Number(data.maxAmount.replace(",", ".")) : undefined,
      };

      onApplyFilters(parsedFilters);
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.dismiss();
      }
    };

    const toggleCategory = (id: number) => {
      const current = selectedCategoryIds;
      if (current.includes(id)) {
        setValue("categoryIds", current.filter((catId) => catId !== id));
      } else {
        setValue("categoryIds", [...current, id]);
      }
    };

    const clearFilters = () => {
      reset({
        categoryIds: [],
        periodType: undefined,
        minAmount: undefined,
        maxAmount: undefined,
        startDate: undefined,
        endDate: undefined,
      });
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

    const renderCategoryChips = () => {
      return categoriesMock.map((category) => {
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
              {category.title}
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
              placeholder="YYYY-MM-DD"
            />
          </View>
          <View style={styles.flex1}>
            <Input
              control={control}
              name="endDate"
              label="Data final"
              placeholder="YYYY-MM-DD"
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
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.flex1}>
              <Input
                control={control}
                name="maxAmount"
                label="Máximo"
                placeholder="999.00"
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

