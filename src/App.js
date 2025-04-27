import { useEffect, useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";
import BudgetForm from "./components/BudgetForm";
import { getTransactions } from "./services/transactionService";
import { getBudgets } from "./services/budgetService";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await getTransactions();
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const response = await getBudgets();
      setBudgets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchBudgets();
  }, []);

  return (
      <div className="min-h-screen bg-gray-100 p-6 space-y-10">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Personal Finance Visualizer</h1>

        {/* Forms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TransactionForm fetchTransactions={fetchTransactions} />
          <BudgetForm fetchBudgets={fetchBudgets} />
        </div>

        {/* Lists Section */}
        <TransactionList transactions={transactions} fetchTransactions={fetchTransactions} />

        {/* Dashboard (Graphs) Section */}
        <Dashboard transactions={transactions} budgets={budgets} />
      </div>
  );
};

export default App;
