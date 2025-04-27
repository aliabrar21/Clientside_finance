// src/services/budgetService.js

import axios from 'axios';

// Fetch all budgets
export const getBudgets = async () => {
    const response = await axios.get('/api/budgets');
    return response.data;
};

// Create or Update a Budget
export const createOrUpdateBudget = async (budgetData) => {
    const response = await axios.post('/api/budgets', budgetData);  // Update the endpoint as needed
    return response.data;
};
