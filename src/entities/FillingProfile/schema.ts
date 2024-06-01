import {z} from "zod";

export const fillingProfileSchema = z.object({
    age: z
        .string()
        .transform(value => Number(value)),
    about_yourself: z
        .string()
        .toLowerCase()
        .min(10, "Не менее 10 символов"),
})
    .refine((data) => data.age > 18, {
        message: "Минимальный возраст 18 лет",
        path: ["age"],
    })
    .refine((data) => data.age < 99, {
        message: "Максимальный возраст 99 лет",
        path: ["age"],
    });

export type FormSchemaFillingProfileSchema = z.infer<typeof fillingProfileSchema>;
