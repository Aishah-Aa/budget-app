import Grid from "@mui/material/Unstable_Grid2";
import { ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "./Button";

type TransferAmountProps = {
  handleSubmit:(key: FormEvent) => void
  setTransferAmount: (key: number) => void
  transferAmount: number
};

export function TransferAmountWrapper({ 
  setTransferAmount,
  handleSubmit,
  transferAmount,
  }:TransferAmountProps) {
   const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {valueAsNumber} = e.target
    setTransferAmount(valueAsNumber);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container xs={12} marginBottom={2}>
          <TextField
            onChange={handleChange}
            id='saving'
            name='saving'
            label='Set target'
            variant='outlined'
            type='number'
            value={transferAmount}
            fullWidth
          />
          </Grid>
              <Grid>
                <Button
                 variant='contained'
                 type='submit'
                 label='Transfer'
                 style={{margin:"0 auto"}}
                 /> 
          </Grid>
     </form>  
    </div>
   )
}
