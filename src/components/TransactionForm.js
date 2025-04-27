import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../validation/transactionSchema";
import { createTransaction } from "../services/transactionService";
import { useState } from "react";


const TransactionForm = ({ fetchTransactions }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(transactionSchema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            await createTransaction(data);
            reset();
            fetchTransactions();
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded-xl shadow-md space-y-4">
            <input {...register("amount")} placeholder="Amount" type="number" className="input" />
            {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}

            <input {...register("date")} placeholder="Date" type="date" className="input" />
            {errors.date && <p className="text-red-500">{errors.date.message}</p>}

            <input {...register("description")} placeholder="Description" className="input" />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}

            <select {...register("category")} className="input">
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Utilities">Utilities</option>
            </select>
            {errors.category && <p className="text-red-500">{errors.category.message}</p>}

            <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Saving..." : "Add Transaction"}
            </button>
        </form>
    );
};

export default TransactionForm;
