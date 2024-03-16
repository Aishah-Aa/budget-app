import MuiButtom from "@mui/material/Button";

type ButtonProp = {
  color: string;
  variant: string;
  type: string;
  label: string;
};
export function Button({
  color = "primary",
  variant = "text",
  type = "submit",
  label,
}: ButtonProp) {
  return (
    <MuiButtom color={color} variant={variant} type={type}>
      {label}
    </MuiButtom>
  );
}
