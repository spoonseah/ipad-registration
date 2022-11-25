import React, { useState } from "react";
import Theme from "../../resources/theme/Theme";
import { COLOR } from "../../resources/theme/Color";
import Error from "./Error";
import "react-datepicker/dist/react-datepicker.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import Button from "./Button";

function DatePickerModel({ onOpen, onClose, date, dobHandler }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          open={onOpen}
          onClose={onClose}
          value={date}
          onChange={dobHandler}
          inputFormat="DD/MM/YYYY"
          maxDate={new Date()}
          renderInput={(params) => (
            <div style={{ padding: 0, margin: 0 }}></div>
          )}
        />
      </LocalizationProvider>
    </>
  );
}

export default DatePickerModel;
