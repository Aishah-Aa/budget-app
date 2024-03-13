import Button from "@mui/material/Button";

type ButtonProp = {
  label: string;
  color?: string;
};
export function Button({ label }: ButtonProp) {
  return (
    <Button color="success" type="submit">
      {label}
    </Button>
  );
}
