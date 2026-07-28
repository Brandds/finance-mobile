import { Theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: Theme) =>
StyleSheet.create({

    container:{
        backgroundColor: theme.colors.primary,
        borderRadius: theme.radius.xl,
        padding: theme.spacing.xl,
        marginTop: theme.spacing.lg,
    },

    badge:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        marginTop: theme.spacing.md,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.radius.full,
        backgroundColor: theme.colors.backgroundOnSecondary,
    }

});