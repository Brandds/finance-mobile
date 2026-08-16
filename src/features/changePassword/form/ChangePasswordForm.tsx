import { Button, Card } from "@/components";
import FormFields from "@/components/FormFields/FormFields";
import { fieldsChangePassword } from "../fields/fields";
import Typography from "@/components/Typography/Typography";
import { View } from "lucide-react-native";
import { useForm } from "react-hook-form";
import { ChangePasswordFormData } from "../types/changePassword.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@/theme/ThemeProvider";

import { styles as stylesChangePassword } from 'src/features/changePassword/styles/changePassword.styles';
import { useChangePassword } from "../hooks/useChangePassword";
import { changePasswordSchema } from "./schema/changePassword.schema";

export default function ChangePasswordForm() {
    const { control,
        handleSubmit,
    } = useForm<ChangePasswordFormData>({
        resolver: zodResolver(changePasswordSchema),

        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const { loading, handleChangePassword } = useChangePassword();
    const theme = useTheme();
    const styles = stylesChangePassword(theme);

    async function onSubmit(data: ChangePasswordFormData) {
        await handleChangePassword(data);
    }

    return (
        <Card style={styles.formCard}>
            <FormFields
                fields={fieldsChangePassword}
                control={control}
            />

            <Button
                title="Salvar Nova Senha"
                variant="primary"
                onPress={handleSubmit(onSubmit)}
                loading={loading}
            />
        </Card>
    );
}