import { tokens } from "@/theme/tokens";
import { StyleSheet } from "react-native";

const stylesLogin = StyleSheet.create({
    container: {
        width: "100%",
        gap: tokens.spacing.xl,
    },

    header: {
        alignItems: "center",
        gap: tokens.spacing.sm
    },

    logoContainer: {
        width: 56,
        height: 52,

        borderRadius: tokens.radius.xl,

        backgroundColor: tokens.colors.primary,

        alignItems: "center",
        justifyContent: "center",

        ...tokens.shadows.level2,
    },

    headerDescription: {
        maxWidth: 300,
    },

    card: {
        backgroundColor: "#FFFFFF",

        borderRadius: tokens.radius.xl,

        padding: tokens.spacing.lg,

        gap: tokens.spacing.md,

        borderWidth: 1,
        borderColor: tokens.colors.border,

        ...tokens.shadows.level1,
    },

    cardHeader: {
        gap: tokens.spacing.xs,
    },

    field: {
        gap: tokens.spacing.sm,
    },

    passwordHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    inputContainer: {
        height: 56,

        borderRadius: tokens.radius.md,

        backgroundColor: tokens.colors.surfaceContainer,

        paddingHorizontal: tokens.spacing.md,

        flexDirection: "row",
        alignItems: "center",

        gap: tokens.spacing.sm,
    },

    input: {
        flex: 1,

        color: tokens.colors.text,

        fontSize: tokens.typography.bodyLg.fontSize,
    },

    loginButton: {
        height: 56,

        borderRadius: tokens.radius.xl,

        backgroundColor: tokens.colors.primary,

        justifyContent: "center",
        alignItems: "center",

        ...tokens.shadows.level2,
    },

    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",

        gap: tokens.spacing.md,
    },

    divider: {
        flex: 1,
        height: 1,
        backgroundColor: tokens.colors.border,
    },

    socialButtons: {
        flexDirection: "row",
        gap: tokens.spacing.md,
    },

    socialButton: {
        flex: 1,

        height: 52,

        borderRadius: tokens.radius.xl,

        borderWidth: 1,
        borderColor: tokens.colors.border,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        gap: tokens.spacing.sm,
    },

    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        gap: tokens.spacing.xs,
    },

    socialButtonPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.97 }],
    },
});

export { stylesLogin };