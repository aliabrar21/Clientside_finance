import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { groupByMonth } from "../utils/groupByMonth";

const MonthlyBarChart = ({ transactions }) => {
    const monthlyData = groupByMonth(transactions);

    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Monthly Expenses</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#4f46e5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MonthlyBarChart;
