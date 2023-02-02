import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";
import FormControl from "@mui/material/FormControl";
export const FormInputText = ({ name, control, label }: FormInputProps) => {
  return (
    <FormControl sx={{borderRadius:"10px"}}>
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField sx={{backgroundColor:'white',width:"350px",borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
          helperText={error ? error.message : null}
          
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
    </FormControl>
  );
};
