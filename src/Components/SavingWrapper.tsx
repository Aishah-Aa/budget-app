import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import { Button } from "./Button";

type SavingTargetProps = {
  savingTarget: number;
  setSavingTarget: React.Dispatch<React.SetStateAction<number>>;
};

export function SavingWrapper({
  savingTarget,
  setSavingTarget,
}: SavingTargetProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(e.target.value);

    setSavingTarget(targetValue);
  };
  return (
    <div>
      <Typography>Saving</Typography>
      <form>
        <Grid xs ={12} marginBottom={2}>
          <TextField
            onChange={handleChange}
            id="Target"
            name="Target"
            label="Set target"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Button variant="contained" type="reset" label="Reset" color="success" /> 
      </form>
              <Grid xs={12} marginBottom={2}>
              <Typography>Current  Saving 0 {savingTarget}</Typography>
              </Grid>
                    <Grid xs={12}marginBottom={2}> 
                    <Typography>Target 500 {savingTarget}</Typography>
                     </Grid>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value= {75} />
         <Box
             sx={{
             top: 0,
             left: 0,
             bottom: 0,
             right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
          >
            
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(75)}%`}</Typography>
      </Box>
    </Box>
    </div>
  );
}
