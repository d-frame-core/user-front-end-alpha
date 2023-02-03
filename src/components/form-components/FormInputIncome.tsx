import React from "react";

import { useFormContext, Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { FormInputProps } from "./FormInputProps";
const options = [
  {
    label: "INR 0 - INR 5,00,000",
    value: "INR 0 - INR 5,00,000",
  },
  {
    label: "INR 5,00,000 - INR 10,00,000",
    value: "INR 5,00,000 - INR 10,00,000",
  },
  {
    label: "INR 10,00,000 - INR 15,00,000",
    value: "INR 10,00,000 - INR 15,00,000",
  },
  {
    label: "> INR 15,00,000",
    value: "> INR 15,00,000",
  },
];

export const FormInputIncome: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl sx={{width:'350px',textAlign:'left'}}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select sx={{borderRadius:"10px",backgroundColor:'white',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} 
          
          onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
