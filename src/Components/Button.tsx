import React from "react";

type ButtonProp = {
  color?: string;
  variant?: string;
  type?: string;
  label: string;
};
export function Button({ color, variant, type, label }: ButtonProp) {
  return (
    <Button color={color} variant={variant} type={type} label={label}></Button>
  );
}
