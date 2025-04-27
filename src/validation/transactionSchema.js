import { z } from "zod";

export const transactionSchema = z.object({
    amount: z.coerce.number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
    }),
    date: z.coerce.date({
        required_error: "Date is required",
    }),
    description: z.string({
        required_error: "Description is required",
    }),
    category: z.string({
        required_error: "Category is required",
    }),
});
