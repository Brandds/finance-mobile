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
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "../form/schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Input";


export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        control,
        handleSubmit,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),

        defaultValues: {
            email: "",
            password: "",
        },
    });

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

                    <View style={styles.field}>
                        {/* Email */}
                        <Input
                            control={control}
                            name="email"
                            label="E-MAIL"
                            placeholder="nome@exemplo.com"
                            icon="mail"
                        />
                        {/* Password */}
                        <Input
                            control={control}
                            name="password"
                            label="SENHA"
                            placeholder="••••••••"
                            icon="lock"
                            secureTextEntry
                        />
                    </View>
                    <Pressable>
                        <Typography
                            variant="body2"
                            color={tokens.colors.primary}
                        >
                            Esqueceu a senha?
                        </Typography>
                    </Pressable>

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
});