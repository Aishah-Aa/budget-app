import { Button } from "./Button";

 export function ExpenseForm({handleChangeSource,handleSubmit,handleChangeAmount}) {
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='resource'>Expense Source</label>
            <input
             type='text' 
             name='resource' 
             placeholder='Bills, Groceries, etc..'
             onChange={handleChangeSource}
             />
            </div>

            <div>
                <label htmlFor='amount'>Amount of expense</label>
                <input type='text' id='amount' name='amount' placeholder='Enter Amount here'
                onChange={handleChangeAmount}
                />
             </div>

             <div>
                <label htmlFor='date'>Date of expense</label>
                <input type='date' id='date' name='date' title='date' />
             </div> 
             <Button label='add expense' />
        </form>
    )
}