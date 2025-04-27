import SummaryCards from "./SummaryCards";
import MonthlyBarChart from "./MonthlyBarChart";
import CategoryPieChart from "./CategoryPieChart";
import BudgetComparisonChart from "./BudgetComparisonChart";

const Dashboard = ({ transactions, budgets }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <SummaryCards transactions={transactions} />
            <MonthlyBarChart transactions={transactions} />
            <CategoryPieChart transactions={transactions} />
            <BudgetComparisonChart transactions={transactions} budgets={budgets} />
        </div>
    );
};

export default Dashboard;
