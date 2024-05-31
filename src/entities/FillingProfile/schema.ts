import {z} from "zod";

export const fillingProfileSchema = z.object({
    sex: z.string(),
    age: z
        .number()
        .min(18),
    hobbies: z.string(),
    about_yourself: z
        .string()
        .toLowerCase()
        .min(10, "Расскажите о себе"),
})

export type FormSchemaFillingProfileSchema = z.infer<typeof fillingProfileSchema>;
