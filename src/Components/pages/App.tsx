import { useState } from "react";
import { Expense, ExpenseWrapper } from "../ExpenseWrapper";
import { Income, IncomeWrapper } from "../IncomeWrapper";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { SavingWrapper } from "../SavingWrapper";

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  console.log("expenses:", expenses);

  let totalIncome = 0;
  incomes.forEach((income) => {
    totalIncome += income.amount;
  });
  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  console.log("totalExpenses:", totalExpenses);

  const balance = totalIncome - totalExpenses;
  console.log("balance:", balance);

  return (
    <div className="App">
      <h1>Budget App</h1>
      <Grid container>
        <Grid xs={12} md={4}>
          <IncomeWrapper
            incomes={incomes}
            setIncomes={setIncomes}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <ExpenseWrapper
            expenses={expenses}
            setExpenses={setExpenses}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <SavingWrapper />
        </Grid>
      </Grid>
      <Typography>Balance:{balance}</Typography>
      <Link to="about">About us</Link>
    </div>
  );
}

export default App;
