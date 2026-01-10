import { z } from "zod";

const categories = ["Personal", "Casa", "Feina", "Estudis"];

export const taskSchema = z.object({
    taskName: z
        .string()
        .min(1, "El nom de la tasca és obligatori")
        .min(5, "El nom ha de tenir almenys 5 caràcters"),
    
    taskCategory: z
        .string()
        .min(1, "La categoria és obligatòria")
        .refine((val) => categories.includes(val), {
            message: "La categoria ha de ser una de les predefinides"
        }),
    
    taskDueDate: z
        .coerce.date()
        .refine((date) => date > new Date(), {
            message: "La data límit ha de ser posterior a la data actual"
        }),
    
    taskPriority: z
        .enum(["baixa", "mitja", "alta"], {
            required_error: "La prioritat és obligatòria",
            invalid_type_error: "La prioritat ha de ser baixa, mitja o alta"
        }),
    
    taskImportant: z.boolean().optional(),
    
    taskDescription: z.string().optional(),
    
    // Campos adicionales del formulario
    urgent: z.boolean().optional(),
});