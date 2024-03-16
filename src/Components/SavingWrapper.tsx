import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress, {
} from "@mui/material/CircularProgress";
import { Button } from "./Button";
import { ChangeEvent } from "react";

type SavingWrapperProps = {
  currentSaving: number;
  savingsTarget: number;
  setSavingsTarget:(key:number) => void
  progress: number;
};

export function SavingWrapper({
  savingsTarget,
  currentSaving,
  setSavingsTarget,
  progress,
  }:SavingWrapperProps){
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {valueAsNumber} = e.target
    setSavingsTarget(valueAsNumber)
  }


  return (
    <div>
      <form>
        <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TextField
            onChange={handleChange}
            id="saving"
            name="saving"
            label="Set target"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Button
          variant="contained"
          type="reset"
          label="Reset"
          color="success"
        />
      <Grid item xs={12} marginBottom={2}>
        <Typography variant="body1">Current Saving {currentSaving}</Typography>
      </Grid>
      <Grid item xs={12} marginBottom={2}>
        <Typography>Target {savingsTarget}</Typography>
      </Grid>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" value={progress} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(progress)}%`}</Typography>
        </Box>
      </Box>
      </Grid>
      </form>
    </div>
  );
}
