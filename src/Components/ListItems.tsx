import Button from '@mui/material/Button';
import { Expense } from "./ExpenseWrapper"
import { Income } from "./IncomeWrapper"


type Item = {
    source: string 
    amount: string
    date: string
}

type ListItemsProps = {
    items: Expense[] | Income[]
    handleDelete: (key: number | string)=> void
}


export function ListItems({items, handleDelete}: ListItemsProps){
    return(
        <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.source}</p>
              <p>{item.amount}</p>
              <p>{item.date}</p>
              <Button color='error' 
              variant='contained' 
              onClick={() => handleDelete(item.id)}>
                Delete</Button>
            </li>
          );
        })}
      </ul>
    )
}