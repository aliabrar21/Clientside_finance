export function compareBudgets(budgets, transactions) {
    const comparison = {};

    budgets.forEach((budget) => {
        const { category, amount: budgetedAmount } = budget;
        const actualAmount = transactions
            .filter((tx) => tx.category === category)
            .reduce((sum, tx) => sum + tx.amount, 0);

        comparison[category] = {
            budgeted: budgetedAmount,
            actual: actualAmount,
            difference: budgetedAmount - actualAmount,
        };
    });

    return comparison;
}
