import { forwardRef, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import AppBottomSheet from "@/components/BottomSheet";
import { AppBottomSheetRef } from "@/components/BottomSheet/types";
import Typography from "@/components/Typography/Typography";
import { Icon } from "@/components";
import { useTheme } from "@/theme/ThemeProvider";

import { styles as pickerStyles } from "./styles";
import { MonthPickerSheetProps } from "./types";

const MONTHS = [
  "Jan", "Fev", "Mar", "Abr",
  "Mai", "Jun", "Jul", "Ago",
  "Set", "Out", "Nov", "Dez",
];

const MonthPickerSheet = forwardRef<AppBottomSheetRef, MonthPickerSheetProps>(
  ({ selectedMonth, onSelect }, ref) => {
    const theme = useTheme();
    const styles = pickerStyles(theme);

    const [viewYear, setViewYear] = useState(selectedMonth.getFullYear());

    useEffect(() => {
      setViewYear(selectedMonth.getFullYear());
    }, [selectedMonth]);

    const handleSelect = (monthIndex: number) => {
      const date = new Date(viewYear, monthIndex, 1);
      onSelect(date);
    };

    const isSelected = (monthIndex: number) =>
      selectedMonth.getMonth() === monthIndex &&
      selectedMonth.getFullYear() === viewYear;

    return (
      <AppBottomSheet ref={ref} snapPoints={["45%"]}>
        <View style={styles.container}>
          <View style={styles.yearRow}>
            <TouchableOpacity
              onPress={() => setViewYear((y) => y - 1)}
              activeOpacity={0.7}
            >
              <Icon name="chevron-left" size={24} color={theme.colors.text} />
            </TouchableOpacity>

            <Typography variant="h2" color={theme.colors.text}>
              {viewYear}
            </Typography>

            <TouchableOpacity
              onPress={() => setViewYear((y) => y + 1)}
              activeOpacity={0.7}
            >
              <Icon name="chevron-right" size={24} color={theme.colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.monthsGrid}>
            {MONTHS.map((name, index) => (
              <TouchableOpacity
                key={name}
                style={[
                  styles.monthItem,
                  isSelected(index)
                    ? styles.monthItemSelected
                    : styles.monthItemUnselected,
                ]}
                onPress={() => handleSelect(index)}
                activeOpacity={0.7}
              >
                <Typography
                  variant="body2"
                  color={
                    isSelected(index)
                      ? theme.colors.onPrimary
                      : theme.colors.text
                  }
                >
                  {name}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </AppBottomSheet>
    );
  }
);

MonthPickerSheet.displayName = "MonthPickerSheet";

export default MonthPickerSheet;
