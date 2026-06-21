import { StyleSheet } from "react-native";
import { Theme } from "@/theme/theme";

export const styles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            position: "absolute",
            bottom: -60,
            right: 24,
        },

        button: {
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: theme.colors.primary,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 3 },
        },

        pressed: {
            opacity: 0.8,
            transform: [{ scale: 0.95 }],
        },
    });