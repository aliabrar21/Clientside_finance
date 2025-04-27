// src/components/BudgetForm.js

import React, { useState } from 'react';
import { createOrUpdateBudget } from '../services/budgetService';  // Import the function

const BudgetForm = () => {
    const [budgetData, setBudgetData] = useState({
        category: '',
        amount: '',
        month: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBudgetData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createOrUpdateBudget(budgetData);  // Call the function
            console.log(response);
            // Handle the response as needed (e.g., show a success message)
        } catch (error) {
            console.error('Error submitting budget:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={budgetData.category}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    name="amount"
                    value={budgetData.amount}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Month:</label>
                <input
                    type="text"
                    name="month"
                    value={budgetData.month}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save Budget</button>
        </form>
    );
};

export default BudgetForm;
