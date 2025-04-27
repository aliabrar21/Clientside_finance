export function groupByCategory(transactions) {
    const grouped = {};

    transactions.forEach((tx) => {
        if (!grouped[tx.category]) {
            grouped[tx.category] = 0;
        }
        grouped[tx.category] += tx.amount;
    });

    return grouped;
}
