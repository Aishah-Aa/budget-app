import { Form } from "./Form";
import { ChangeEvent, FormEvent, useState } from "react";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { ListItems } from "./ListItems";
import { Dayjs } from "dayjs";

export type Expense = {
  id: string | number;
  source: string;
  amount: number;
  date: string | null;
};

const EXPENSE_INPUTS = [
  {
    name: "amount",
    id: "amount",
    label: "Expense Amount",
  }
];

type ExpenseWrapperProps = {
  expenses: Expense[];
  setExpenses: (key: Expense[]) => void;
  handleDelete: (key:number | string) => void;
};

export function ExpenseWrapper({expenses, setExpenses, handleDelete}: ExpenseWrapperProps) {
  const [expense, setExpense] = useState({
    id: +new Date(),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleChangeDate = (value: Dayjs | null) => {
    if (value) {
      setExpense({
        ...expense,
        date: value.toDate().toLocaleDateString(),
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newExpense = {
      id: new Date().toLocaleDateString(),
      source: expense.source,
      amount: Number(expense.amount),
      date: expense.date,
    };

    setExpenses([...expenses, newExpense]);
  };

  return (
    <>
      <Form
        handleChnage={handleChange}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
        inputs={EXPENSE_INPUTS}
      />
      <ListItems items={expenses} handleDelete={handleDelete} />
    </>
  );
}
