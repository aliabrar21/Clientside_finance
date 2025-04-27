import axios from "axios";

const BASE_URL = "http://localhost:5000"; // if you are connecting to mock server or backend

export const createTransaction = (data) => axios.post(`${BASE_URL}/transactions`, data);
export const getTransactions = () => axios.get(`${BASE_URL}/transactions`);
export const deleteTransaction = (id) => axios.delete(`${BASE_URL}/transactions/${id}`);
