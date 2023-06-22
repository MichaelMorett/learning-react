import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option>All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Dining">Dining</option>
      <option value="Credit Card">Credit Card</option>
    </select>
  );
};

export default ExpenseFilter;
