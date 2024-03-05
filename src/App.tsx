import React from 'react';
import { Button } from './Components/Button';
import './App.css';
import { IncomeForm } from "./Components/IncomeForm"
import { useState } from 'react';

function App() {
  const [incomes,setIncomes] = useState([])
  const [source,setSource] = useState("")
  const [amount,setAmount] = useState(0)
  const [date,setDate] = useState(null)

  const handleChangeSource = (e)=> {
    const value = e.target.value
    setSource(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("SUBMITTING....")
    setIncome([...incomes])
  }
  console.log('source:',source)

  return (
    <div className="App">
      <h1>Budget App</h1>  
      <IncomeForm handleChangeSource={handleChangeSource} handleSubmit={handleSubmit}/> 
    </div>
  )
}

export default App;
