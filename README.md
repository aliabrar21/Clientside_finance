# Personal Finance Visualizer

## Description

A **Personal Finance Visualizer** web application built using **React**, **MongoDB**, **Recharts**, and **shadcn/ui**. This application helps users track their income and expenses, categorize transactions, set budgets, and visualize their spending through charts. The app provides an intuitive interface for managing personal finances with features like monthly expenses tracking, budget setting, and category-wise visualizations.

---

## Features

- **Transaction Tracking**: Add, view, update, and delete income/expense transactions.
- **Transaction Categorization**: Categorize transactions (e.g., Food, Rent, Utilities, etc.).
- **Data Visualizations**: 
  - Monthly expenses bar chart
  - Category-wise pie chart
  - Budget vs. Actual comparison chart
- **Budget Management**: Set budgets for various categories and compare actual spending with the set budget.
- **Responsive UI**: The application is fully responsive and adjusts to different screen sizes.

---

## Technologies Used

- **Frontend**:
  - React
  - Next.js (Optional for Routing in Production)
  - Recharts (for Data Visualization)
  - Tailwind CSS
  - shadcn/ui (UI components library)
  - React Hook Form (for form management)
  - Zod (for form validation)

- **Backend**:
  - MongoDB (for storing transactions, budgets, etc.)
  - Mongoose (for MongoDB schema and models)

- **Development Tools**:
  - Axios (for making HTTP requests)
  - Date-fns (for date manipulation)
  - Prettier (for code formatting)
  - clsx, class-variance-authority (for managing conditional class names)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/personal-finance-visualizer.git
cd personal-finance-visualizer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of your project and add your MongoDB URI:

```
MONGODB_URI=<your_mongodb_connection_string>
```

You can get a free MongoDB connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### 4. Run the development server

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

---

## API Endpoints

### `/api/transactions`
- **GET**: Fetch all transactions.
- **POST**: Create a new transaction.
- **PUT**: Update an existing transaction.
- **DELETE**: Delete a transaction.

### `/api/budgets`
- **GET**: Fetch all budgets.
- **POST**: Create or update a budget.

---

## Usage

1. **Add a Transaction**: Fill out the form to add a new transaction, specifying the amount, date, description, and category.
2. **View Transactions**: View all transactions in a list format.
3. **View Charts**: View monthly expenses in a bar chart, and the category breakdown in a pie chart.
4. **Set a Budget**: Set a budget for different categories.
5. **View Budget Insights**: Compare the actual spending to the set budget with a chart.

---

## Deployment

1. **Deploy to Vercel**:  
   If you'd like to deploy this project, you can use [Vercel](https://vercel.com). Just sign in with your GitHub account and follow the deployment steps.

2. **Set up Environment Variables on Vercel**:
   - Go to the Vercel Dashboard.
   - Navigate to your project.
   - Add the `MONGODB_URI` as an environment variable in the project settings.

---

## Contributing

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your fork.
5. Create a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

Created by **Abrar Ali**  
For inquiries, feel free to contact me at [sonuabrar1999@gmail.com].

---

### Notes

- Be sure to replace `Abrar Ali` and `sonuabrar1999@gmail.com` with your actual GitHub username and email address.
- You can modify or extend the features section based on what you’ve implemented or plan to implement.

Let me know if you need further adjustments! 😄
