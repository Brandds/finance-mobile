import z from "zod";

function fitsBCryptLimit(value: string) {
    const bytes = Array.from(value).reduce((total, character) => {
        const code = character.codePointAt(0)!;
        return total + (code <= 0x7f ? 1 : code <= 0x7ff ? 2 : code <= 0xffff ? 3 : 4);
    }, 0);
    return bytes <= 72;
}

export const changePasswordSchema = z.object({
    currentPassword: z.string()
        .refine((value) => value.trim().length > 0, "Senha atual obrigatória")
        .refine(fitsBCryptLimit, "A senha deve ter no máximo 72 bytes em UTF-8"),
    newPassword: z.string()
        .min(8, "A nova senha deve ter pelo menos 8 caracteres")
        .max(72, "A nova senha deve ter no máximo 72 caracteres")
        .refine((value) => value.trim().length > 0, "Nova senha obrigatória")
        .refine(fitsBCryptLimit, "A senha deve ter no máximo 72 bytes em UTF-8"),
    confirmPassword: z.string().min(8, "A confirmação da nova senha deve ter pelo menos 8 caracteres"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
}).refine((data) => data.newPassword !== data.currentPassword, {
    message: "A nova senha deve ser diferente da atual",
    path: ["newPassword"],
});

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
