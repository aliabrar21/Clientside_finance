
import { format } from "date-fns";

export const groupByMonth = (transactions) => {
    const map = {};

    transactions.forEach(txn => {
        const month = format(new Date(txn.date), "MMM yyyy");
        map[month] = (map[month] || 0) + txn.amount;
    });

    return Object.entries(map).map(([month, amount]) => ({ month, amount }));
};
