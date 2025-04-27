import { deleteTransaction } from "../services/transactionService";

const TransactionList = ({ transactions, fetchTransactions }) => {
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure?")) return;
        try {
            await deleteTransaction(id);
            fetchTransactions();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Transactions</h2>
            <table className="w-full">
                <thead>
                <tr>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(txn => (
                    <tr key={txn._id}>
                        <td>${txn.amount}</td>
                        <td>{new Date(txn.date).toLocaleDateString()}</td>
                        <td>{txn.description}</td>
                        <td>{txn.category}</td>
                        <td>
                            <button className="btn-danger" onClick={() => handleDelete(txn._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;
