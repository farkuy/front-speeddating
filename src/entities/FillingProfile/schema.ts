import {z} from "zod";

export const fillingProfileSchema = z.object({
    sex: z.string(),
    age: z
        .number()
        .min(18)
        .max(99),
    about_yourself: z
        .string()
        .toLowerCase()
        .min(10, "Не менее 10 символов"),
})

export type FormSchemaFillingProfileSchema = z.infer<typeof fillingProfileSchema>;
