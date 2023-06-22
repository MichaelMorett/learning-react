import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Lettuce", amount: 2.5, category: "Groceries" },
    { id: 2, description: "Tomatoes", amount: 3.25, category: "Groceries" },
    { id: 3, description: "Starbucks", amount: 4.15, category: "Dining" },
    { id: 4, description: "McDonalds", amount: 8.65, category: "Dining" },
    { id: 5, description: "Visa", amount: 200.0, category: "Credit Card" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
