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
import { Button, Card, Icon } from "@/components";
import { constantsAuth } from "../constants/constantsAuth";
import { constants } from "@/constants/constants";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "../form/schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Input";
import { stylesLogin } from "../styles";


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
            <View style={stylesLogin.container}>
                {/* Header */}
                <View style={stylesLogin.header}>
                    <Icon
                        styleView={stylesLogin.logoContainer}
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


                    <View style={stylesLogin.headerDescription}>
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
                <Card styleCard={stylesLogin.card}>
                    <View style={stylesLogin.cardHeader}>
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

                    <View style={stylesLogin.field}>
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
                    <Pressable style={stylesLogin.loginButton}>
                        <Typography
                            variant="h2"
                            color={tokens.colors.onPrimary}
                        >
                            Entrar
                        </Typography>
                    </Pressable>

                    {/* Divider */}
                    <View style={stylesLogin.dividerContainer}>
                        <View style={stylesLogin.divider} />

                        <Typography
                            variant="body2"
                            color={tokens.colors.textSecondary}
                        >
                            OU ACESSE COM
                        </Typography>

                        <View style={stylesLogin.divider} />
                    </View>

                    {/* Social Buttons */}
                    <View style={stylesLogin.socialButtons}>
                       <Button
                            variant="secondary"
                            style={stylesLogin.socialButton}
                            >
                            <MaterialIcons
                                name="g-mobiledata"
                                size={24}
                                color={tokens.colors.text}
                            />

                            <Typography variant="body2">
                                Google
                            </Typography>
                        </Button>

                       <Button
                            variant="secondary"
                            style={stylesLogin.socialButton}
                            >
                            <MaterialIcons
                                name="apple"
                                size={24}
                                color={tokens.colors.text}
                            />

                            <Typography variant="body2">
                                Apple
                            </Typography>
                        </Button>
                    </View>
                </Card>

                {/* Footer */}
                <View style={stylesLogin.footer}>
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
