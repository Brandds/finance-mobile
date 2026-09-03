import React, { forwardRef, useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AppBottomSheet from "@/components/BottomSheet";
import { AppBottomSheetRef } from "@/components/BottomSheet/types";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useTheme } from "@/theme/ThemeProvider";

import { expenseFilterSchema, ExpenseFilterFormData } from "./schema";
import { styles as createStyles } from "./styles";
import { PeriodType } from "../../types/expense.type";
import { categoriesMock } from "@/mocks/categoriesMock";

export interface ExpenseFilterSheetProps {
  onApplyFilters: (filters: ExpenseFilterFormData) => void;
}

const ExpenseFilterSheet = forwardRef<AppBottomSheetRef, ExpenseFilterSheetProps>(
  ({ onApplyFilters }, ref) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    const {
      control,
      handleSubmit,
      watch,
      setValue,
      reset,
      formState: { errors },
    } = useForm<ExpenseFilterFormData>({
      resolver: zodResolver(expenseFilterSchema),
      defaultValues: {
        categoryIds: [],
      },
    });

    const selectedPeriod = watch("periodType");
    const selectedCategoryIds = watch("categoryIds") || [];

    const handleApply = (data: ExpenseFilterFormData) => {
      // Remove startDate e endDate se não for CUSTOM
      if (data.periodType !== PeriodType.CUSTOM) {
        data.startDate = undefined;
        data.endDate = undefined;
      }
      onApplyFilters(data);
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.dismiss();
      }
    };

    const toggleCategory = (id: number) => {
      if (selectedCategoryIds.includes(id)) {
        setValue(
          "categoryIds",
          selectedCategoryIds.filter((catId) => catId !== id)
        );
      } else {
        setValue("categoryIds", [...selectedCategoryIds, id]);
      }
    };

    const clearFilters = () => {
      reset({ categoryIds: [], periodType: undefined, minAmount: undefined, maxAmount: undefined, startDate: undefined, endDate: undefined });
    };

    return (
      <AppBottomSheet ref={ref} snapPoints={["85%"]}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Typography variant="h2">Filtros</Typography>
            <TouchableOpacity onPress={clearFilters}>
              <Typography variant="body2" color={theme.colors.primary}>
                Limpar
              </Typography>
            </TouchableOpacity>
          </View>

          <Typography variant="body1" style={styles.sectionTitle}>
            Período
          </Typography>
          <View style={styles.chipContainer}>
            {[
              { label: "Hoje", value: PeriodType.TODAY },
              { label: "Últimos 7 dias", value: PeriodType.LAST_7_DAYS },
              { label: "Mês atual", value: PeriodType.CURRENT_MONTH },
              { label: "Personalizado", value: PeriodType.CUSTOM },
            ].map((period) => (
              <TouchableOpacity
                key={period.value}
                style={[
                  styles.chip,
                  selectedPeriod === period.value && styles.chipSelected,
                ]}
                onPress={() => setValue("periodType", period.value)}
              >
                <Typography
                  variant="body2"
                  style={
                    selectedPeriod === period.value
                      ? styles.chipTextSelected
                      : styles.chipText
                  }
                >
                  {period.label}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>

          {selectedPeriod === PeriodType.CUSTOM && (
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
          )}

          <Typography variant="body1" style={styles.sectionTitle}>
            Valor
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
            Categorias
          </Typography>
          <View style={styles.chipContainer}>
            {categoriesMock.map((category) => {
              const isSelected = selectedCategoryIds.includes(category.id);
              return (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.chip,
                    isSelected && styles.chipSelected,
                  ]}
                  onPress={() => toggleCategory(category.id)}
                >
                  <Typography
                    variant="body2"
                    style={
                      isSelected
                        ? styles.chipTextSelected
                        : styles.chipText
                    }
                  >
                    {category.title}
                  </Typography>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.footer}>
            <Button onPress={handleSubmit(handleApply)}>Aplicar Filtros</Button>
          </View>
        </ScrollView>
      </AppBottomSheet>
    );
  }
);

export default ExpenseFilterSheet;
