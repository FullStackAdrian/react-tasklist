// features/tasks/schema/taskSchema.js
import { z } from "zod";

export const taskSchema = z.object({
    nom: z.string().min(1, "El nom és obligatori"),
    category: z.string().min(1, "La categoria és obligatòria"),
    date: z.string().min(1, "La data és obligatòria"),
});
