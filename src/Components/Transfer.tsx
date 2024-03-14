import React from "react";
import Typography from "@mui/material/Typography";


type TransferProps = {
  transfer: number;
  setTransfer: React.Dispatch<React.SetStateAction<number>>;
}

export function Transfer({
  transfer, setTransfer
}: TransferProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(e.target.value);

    setTransfer(targetValue);
  };
  return (
    <div>
      <Typography>Current Balance</Typography>
      
    </div>
  );
}