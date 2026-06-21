import { StyleSheet } from "react-native";
import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 20,
            backgroundColor: theme.colors.onPrimary,
            marginRight: 8,
            borderWidth: 1,
            borderColor: theme.colors.border,
            alignSelf: "flex-start",
        },

        containerPressed: {
            opacity: 0.7,
            transform: [{ scale: 0.98 }],
        },

        containerSelected: {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
        },

        label: {
            fontSize: 14,
            color: theme.colors.text,
            fontWeight: "500",
        },

        labelSelected: {
            color: theme.colors.text,
        },
    });