import z from "zod";

export const changePasswordSchema = z.object({
    currentPassword: z.string().min(8, "A senha atual deve ter pelo menos 8 caracteres"),
    newPassword: z.string().min(8, "A nova senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(8, "A confirmação da nova senha deve ter pelo menos 8 caracteres"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;