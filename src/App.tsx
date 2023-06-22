import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["Credit Card", "Dining", "Groceries"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Lettuce", amount: 2.5, category: "Groceries" },
    { id: 2, description: "Tomatoes", amount: 3.25, category: "Groceries" },
    { id: 3, description: "Starbucks", amount: 4.15, category: "Dining" },
    { id: 4, description: "McDonalds", amount: 8.65, category: "Dining" },
    { id: 5, description: "Visa", amount: 200.0, category: "Credit Card" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
