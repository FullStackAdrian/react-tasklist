import { z } from "zod";

export const authFormSchema = z.object({
    email: z.string().min(1, "El nom d'usuari és obligatori"),
    password: z.string().min(1, "La contrasenya és obligatòria")
});