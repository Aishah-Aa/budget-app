import { FormEvent, useState } from "react";
import { Expense, ExpenseWrapper } from "./Components/ExpenseWrapper";
import { Income, IncomeWrapper } from "./Components/IncomeWrapper";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { SavingWrapper } from "./Components/SavingWrapper";
import { TransferAmountWrapper } from "./Components/TransferAmountWrapper";

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [savingsTarget, setSavingsTarget] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const[transferError, setTransferError]= useState('')

 let totalIncome = 0;
  incomes.forEach((income) => {
    totalIncome += income.amount;
  });

  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  console.log("totalExpenses:", totalExpenses);

  const balance = totalIncome - totalExpenses - currentSaving;
  

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
   
   if(transferAmount <= balance) {
    setCurrentSaving((prevState)=>{
      return prevState + transferAmount
    })
    setTransferError("")
   } else{
    setTransferError("No Sufficient Amount!!");
   }
   setTransferAmount(0)
}


const progress = (currentSaving / savingsTarget) *100 || 0
console.log('progress:', progress + "%")

  return (
    <div className="App">
      <h1>Budget App</h1>
      <Grid container>
        <Grid item xs={12} md={4}>
          <IncomeWrapper incomes={incomes} setIncomes={setIncomes} />
        </Grid>

        <Grid item xs={12} md={4}>
          <ExpenseWrapper expenses={expenses} setExpenses={setExpenses} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SavingWrapper
            setSavingsTarget={setSavingsTarget}
            currentSaving={currentSaving}
            savingsTarget={savingsTarget}
            progress={progress}
          />
           </Grid>
           </Grid>
            <Grid container justifyItems=''>
              <Grid item xs={12} textAlign='center' marginTop={10}>
                <Typography> Balance:{balance}</Typography>
              </Grid>
            </Grid>
              <Grid item xs={12} justifyContent='center' display='flex'>
              <TransferAmountWrapper setTransferAmount={setTransferAmount} 
                handleSubmit={handleSubmit}
                transferAmount={transferAmount}/>
                </Grid>
                    <Grid item XS={12}>
                       {transferError && <Typography color='error' textAlign='center'>{transferError}</Typography>}
      </Grid>
<Link to="/about">About us</Link>
    </div>
  )
}

export default App;
