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

function DatePickerModel({
  onOpen,
  onClose,
  date,
  dobHandler,
  closeOnSelect,
  error,
  datePicker,
}) {
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

const styles = {
  selectWrap: {
    width: "100%",
    border: "1px solid #DFE0E5",
    borderRadius: "5px",
    padding: "15px 30px",
  },
  select: {
    appearance: "none",
    width: "100%",
    fontSize: 20,
    border: 0,
    fontWeight: 500,
    fontFamily: "Montserrat",
    color: "#999",
    backgroundImage: 'url("../images/down-arrow.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 50%",
  },
};
