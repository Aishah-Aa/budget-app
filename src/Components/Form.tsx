import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Grid from '@mui/material/Unstable_Grid2';
import { ChangeEvent, FormEvent } from "react";
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';

type Input = {
  name: string,
  id: string,
  label: string,
}
type FormProps = {
  handleChnage: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent) => void  
  handleChangeDate: (value: any) => void 
  inputs: Input[]
}

export function Form({ 
  handleChnage,
  handleSubmit,
  handleChangeDate,
inputs
}:
  FormProps) {
  return (
    <form onSubmit={handleSubmit}>
  <Grid container>
    {
      inputs.map(input =>{
        return(
          <Grid  xs={12} key={input.id}>
          <TextField
          name={input.name}
          id={input.id}
          label={input.label}
          variant="outlined"
          onChange={handleChnage}
        />
        </Grid>
        )
      })
    }
      <Grid xs={12}>
    <TextField
          name="source"
          id="source"
          label="Income Source"
          variant="outlined"
          onChange={handleChnage}
        />
     </Grid>
         <Grid xs={12}>
          <TextField
          name="amount"
          id="amount"
          label="Income Amount"
          variant="outlined"
          onChange={handleChnage}
          />
          </Grid> 
               <Grid xs={12}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>   
            <DatePicker onChange={handleChangeDate} />
        </LocalizationProvider>
              </Grid>
                   <Grid xs={12}>
                   <Button variant='contained' onClick={handleSubmit}> Add </Button> 
                   </Grid>
   </Grid>
    </form>
  );
}
