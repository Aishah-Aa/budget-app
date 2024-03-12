import { Form } from "./Form";
import { ChangeEvent, FormEvent, useState } from "react";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { ListItems } from "./ListItems";
import dayjs, { Dayjs } from "dayjs";

export type Income = {
  id: string| number;
  source: string;
  amount: number;
  date: string |null;
};

const INCOME_INPUTS = [
  {
    name: "source",
    id: "source",
    label: "Income Source",
  }
];


type IncomeWrapperProps = {
  incomes: Income[];
  setIncomes: (key: Income[]) => void;
  handleDelete: (key: number | string)=> void
};

export function IncomeWrapper({incomes, setIncomes, handleDelete}: IncomeWrapperProps) {
  const [income, setIncome] = useState<Income>({
    id: +new Date(),
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
      id: +new Date(),
      source: income.source,
      amount: +income.amount,
      date: income.date,
    };

    setIncomes([...incomes, newIncome]);
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
