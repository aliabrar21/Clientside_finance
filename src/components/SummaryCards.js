const SummaryCards = ({ transactions }) => {
    const totalExpenses = transactions.reduce((sum, t) => sum + t.amount, 0);

    return (
        <div className="p-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold">Summary</h2>
            <div>Total Expenses: ${totalExpenses}</div>
        </div>
    );
};

export default SummaryCards;
