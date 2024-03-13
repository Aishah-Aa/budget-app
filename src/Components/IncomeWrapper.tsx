import { Form } from "./Form";
import { ChangeEvent, FormEvent, useState } from "react";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { ListItems } from "./ListItems";
import dayjs, { Dayjs } from "dayjs";

export type Income = {
  id: string;
  source: string;
  amount: number;
  date: string | null;
};

const INCOME_INPUTS = [
  {
    name: "source",
    id: "source",
    label: "Income Source",
  },
  {
    name: "amount",
    id: "amount",
    label: "Income Amount",
  },
];

type IncomeWrapperProps = {
  incomes: Income[];
  setIncomes: (key: Income[]) => void;
};

export function IncomeWrapper({ incomes, setIncomes }: IncomeWrapperProps) {
  const [income, setIncome] = useState<Income>({
    id: new Date().toLocaleDateString(),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setIncome({
      ...income,
      [name]: value,
    });
  };

  const handleChangeDate = (value: Dayjs | null) => {
    if (value) {
      setIncome({
        ...income,
        date: value.toDate().toLocaleDateString(),
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newIncome: Income = {
      id: new Date().toLocaleDateString(),
      source: income.source,
      amount: +income.amount,
      date: income.date,
    };

    setIncomes([...incomes, newIncome]);
  };
  const handleDelete = (id: string) => {
    const updatedIncomes = incomes.filter((income) => {
      return income.id !== id;
    });
    setIncomes(updatedIncomes);
  };

  return (
    <>
      <Form
        handleChnage={handleChange}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
        inputs={INCOME_INPUTS}
      />

      <ListItems items={incomes} handleDelete={handleDelete} />
    </>
  );
}
