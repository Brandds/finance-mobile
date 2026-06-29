import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

const stylesLogin = (theme: Theme) =>
    StyleSheet.create({
        container: {
            width: "100%",
            gap: theme.spacing.xl,
        },

        header: {
            alignItems: "center",
            gap: theme.spacing.sm
        },

        logoContainer: {
            width: 56,
            height: 52,

            borderRadius: theme.radius.xl,

            backgroundColor: theme.colors.primary,

            alignItems: "center",
            justifyContent: "center",

            ...theme.shadows.level2,
        },

        headerDescription: {
            maxWidth: 300,
        },

        card: {
            backgroundColor: theme.colors.background,

            borderRadius: theme.radius.xl,

            padding: theme.spacing.lg,

            gap: theme.spacing.md,

            borderWidth: 1,
            borderColor: theme.colors.border,

            ...theme.shadows.level1,
        },

        cardHeader: {
            gap: theme.spacing.xs,
        },

        field: {
            gap: theme.spacing.sm,
        },

        passwordHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },

        inputContainer: {
            height: 56,

            borderRadius: theme.radius.md,

            backgroundColor: theme.colors.surfaceContainer,

            paddingHorizontal: theme.spacing.md,

            flexDirection: "row",
            alignItems: "center",

            gap: theme.spacing.sm,
        },

        input: {
            flex: 1,

            color: theme.colors.text,

            fontSize: theme.typography.bodyLg.fontSize,
        },

        loginButton: {
            height: 56,

            borderRadius: theme.radius.xl,

            backgroundColor: theme.colors.primary,

            justifyContent: "center",
            alignItems: "center",

            ...theme.shadows.level2,
        },

        dividerContainer: {
            flexDirection: "row",
            alignItems: "center",

            gap: theme.spacing.md,
        },

        divider: {
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.border,
        },

        socialButtons: {
            flexDirection: "row",
            gap: theme.spacing.md,
        },

        socialButton: {
            flex: 1,

            height: 52,

            borderRadius: theme.radius.xl,

            borderWidth: 1,
            borderColor: theme.colors.border,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

            gap: theme.spacing.sm,
        },

        footer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            gap: theme.spacing.xs,
        },

        socialButtonPressed: {
            opacity: 0.7,
            transform: [{ scale: 0.97 }],
        },
    });



const stylesRegister = (theme: Theme) =>
    StyleSheet.create({
        checkboxContainer: {
            flexDirection: "row",
            alignItems: "center",

            gap: theme.spacing.sm,
        }
    }
    )

export { stylesLogin, stylesRegister };
