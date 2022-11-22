import React, { useState } from "react";
import Theme from "../../resources/theme/Theme";
import { COLOR } from "../../resources/theme/Color";
import { BiChevronDown } from "react-icons/bi";
import Error from "./Error";
import "react-datepicker/dist/react-datepicker.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
function DropDownMenu({
  label,
  customStyle,
  Options,
  dob,
  value,
  optionsHandler,
  date,
  dobHandler,
  error,
}) {
  return (
    <>
      <div
        class="select-style"
        style={{ ...styles.selectWrap, ...customStyle }}
      >
        <div style={Theme.label}>{label}</div>
        {!dob ? (
          <select
            style={{
              color: COLOR.DARK_GRAY,
              width: "100%",
              fontSize: 20,
              border: 0,
              fontWeight: 500,
              fontFamily: "Montserrat",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% 50%",
              backgroundColor: "transparent",
            }}
            value={value}
            onChange={optionsHandler}
            placeholder="Select"
          >
            <>
              {Options.map((option, index) => (
                <option key={index} value={option.value} placeholder="Select">
                  {option.label}
                </option>
              ))}
            </>
          </select>
        ) : (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={dobHandler}
              inputFormat="DD/MM/YYYY"
              value={date}
              maxDate={new Date()}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  margin="none"
                  style={{ display: "flex" }}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "Select",
                  }}
                  sx={{
                    input: {
                      color: COLOR.DARK_GRAY,
                      fontSize: 20,
                      fontWeight: 500,
                      margin: 0,
                      padding: 0,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "100% 50%",
                      backgroundColor: "transparent",
                    },

                    ".MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiInputBase-root": {
                      "& input": {
                        textAlign: "left",
                      },
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
        )}
      </div>
      <Error error={error} />
    </>
  );
}

export default DropDownMenu;

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
