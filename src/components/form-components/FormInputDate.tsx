import React from "react";
import TextField from "@mui/material/TextField";
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import FormControl from "@mui/material/FormControl";
const DATE_FORMAT = "dd-MMM-yy";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  return (
    <FormControl sx={{ borderRadius: "1vh", width: "350px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <TextField
            sx={{
              paddingTop:'0',
              borderRadius: "1vh",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              height: "6vh",
            }}
            fullWidth
            type="date"
            placeholder=""
            // variant="inline"
             defaultValue={""}
            
            id={`date-${Math.random()}`}
            // rifmFormatter={(val) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, "")}
            // refuse={/[^[a-zA-Z0-9-]*$]+/gi}
            // autoOk
            // KeyboardButtonProps={{
            //   "aria-label": "change date",
            // }}
            // format={DATE_FORMAT}
            {...field}
            required
          />
        )}
      />
    </FormControl>
  );
};
