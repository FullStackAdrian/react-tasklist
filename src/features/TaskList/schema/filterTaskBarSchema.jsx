import { z } from "zod";

export const filterTaskBarSchema = z.object({
    filter: z.string().min(1, "Escriu minim una lletra per començar a filtra per tasca.")
});
