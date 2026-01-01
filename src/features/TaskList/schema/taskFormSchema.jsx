// features/tasks/schema/taskSchema.js
import { z } from "zod";

export const taskSchema = z.object({
    nom: z.string().min(1, "El nom és obligatori"),
    category: z.string().min(1, "La categoria és obligatòria"),
    urgent: z.boolean().optional(),
    important: z.boolean().optional(),
    date: z.string().min(1, "La data és obligatòria"),
});
