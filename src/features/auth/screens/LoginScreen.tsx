import { useState } from "react";

import {
    View,
    TextInput,
    Pressable,
    StyleSheet,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";

import { tokens } from "@/theme/tokens";
import { Card, Icon } from "@/components";
import { constantsAuth } from "../constants/constantsAuth";
import { constants } from "@/constants/constants";

export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Screen centered>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Icon
                        styleView={styles.logoContainer}
                        name="account-balance-wallet"
                        size={28}
                        color={tokens.colors.onPrimary}
                    />

                    <Typography
                        variant="h1"
                        color={tokens.colors.primary}
                        align="center"
                    >
                        {constants.titleApp}
                    </Typography>


                    <View style={styles.headerDescription}>
                        <Typography
                            variant="body2"
                            color={tokens.colors.textSecondary}
                            align="center"
                        >
                            {constantsAuth.title}
                        </Typography>
                    </View>
                </View>

                {/* Card */}
                <Card styleCard={styles.card}>
                    <View style={styles.cardHeader}>
                        <Typography variant="h1">
                            Boas-vindas
                        </Typography>

                        <Typography
                            variant="body2"
                            color={tokens.colors.textSecondary}
                        >
                            Acesse sua conta para continuar.
                        </Typography>
                    </View>

                    {/* Email */}
                    <View style={styles.field}>
                        <Typography
                            variant="body2"
                            color={tokens.colors.textSecondary}
                        >
                            E-MAIL
                        </Typography>

                        <View style={styles.inputContainer}>
                            <MaterialIcons
                                name="mail"
                                size={20}
                                color={tokens.colors.textSecondary}
                            />

                            <TextInput
                                placeholder="nome@exemplo.com"
                                placeholderTextColor={tokens.colors.textSecondary}
                                style={styles.input}
                            />
                        </View>
                    </View>

                    {/* Password */}
                    <View style={styles.field}>
                        <View style={styles.passwordHeader}>
                            <Typography
                                variant="body2"
                                color={tokens.colors.textSecondary}
                            >
                                SENHA
                            </Typography>

                            <Pressable>
                                <Typography
                                    variant="body2"
                                    color={tokens.colors.primary}
                                >
                                    Esqueceu a senha?
                                </Typography>
                            </Pressable>
                        </View>

                        <View style={styles.inputContainer}>
                            <MaterialIcons
                                name="lock"
                                size={20}
                                color={tokens.colors.textSecondary}
                            />

                            <TextInput
                                placeholder="••••••••"
                                placeholderTextColor={tokens.colors.textSecondary}
                                secureTextEntry={!showPassword}
                                style={styles.input}
                            />

                            <Pressable
                                onPress={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                <MaterialIcons
                                    name={
                                        showPassword
                                            ? "visibility-off"
                                            : "visibility"
                                    }
                                    size={20}
                                    color={tokens.colors.textSecondary}
                                />
                            </Pressable>
                        </View>
                    </View>

                    {/* Button */}
                    <Pressable style={styles.loginButton}>
                        <Typography
                            variant="h2"
                            color={tokens.colors.onPrimary}
                        >
                            Entrar
                        </Typography>
                    </Pressable>

                    {/* Divider */}
                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />

                        <Typography
                            variant="body2"
                            color={tokens.colors.textSecondary}
                        >
                            OU ACESSE COM
                        </Typography>

                        <View style={styles.divider} />
                    </View>

                    {/* Social Buttons */}
                    <View style={styles.socialButtons}>
                        <Pressable style={styles.socialButton}>
                            <MaterialIcons
                                name="g-mobiledata"
                                size={24}
                                color={tokens.colors.text}
                            />

                            <Typography variant="body2">
                                Google
                            </Typography>
                        </Pressable>

                        <Pressable style={styles.socialButton}>
                            <MaterialIcons
                                name="apple"
                                size={24}
                                color={tokens.colors.text}
                            />

                            <Typography variant="body2">
                                Apple
                            </Typography>
                        </Pressable>
                    </View>
                </Card>

                {/* Footer */}
                <View style={styles.footer}>
                    <Typography
                        variant="body2"
                        color={tokens.colors.textSecondary}
                    >
                        Não tem uma conta?
                    </Typography>

                    <Pressable>
                        <Typography
                            variant="body2"
                            color={tokens.colors.primary}
                        >
                            Cadastre-se
                        </Typography>
                    </Pressable>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: tokens.spacing.xl,
    },

    header: {
        alignItems: "center",
        gap: tokens.spacing.sm,
    },

    logoContainer: {
        width: 56,
        height: 56,

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

        gap: tokens.spacing.lg,

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
});