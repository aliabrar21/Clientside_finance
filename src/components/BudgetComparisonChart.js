import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { compareBudgets } from "../utils/compareBudgets";

const BudgetComparisonChart = ({ transactions, budgets }) => {
    const data = compareBudgets(transactions, budgets);

    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Budget vs Actual</h2>
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="actual" fill="#FF8042" />
                    <Line type="monotone" dataKey="budget" stroke="#4f46e5" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BudgetComparisonChart;
