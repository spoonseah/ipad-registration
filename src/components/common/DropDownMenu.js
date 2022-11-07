import React, { useState } from "react";
import Theme from "../../resources/theme/Theme";
import { COLOR } from "../../resources/theme/Color";
import { BiChevronDown } from "react-icons/bi";
import Error from "./Error";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
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
      <div style={{ ...styles.selectWrap, ...customStyle }}>
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
              // color: "#999",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% 50%",
            }}
            value={value}
            onChange={optionsHandler}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: COLOR.DARK_GRAY,
            }}
          >
            {/* <DatePicker
              selected={date}
              onChange={dobHandler}
              dateFormat={"dd/MM/yyyy"}
              className={"datePicker"}
              placeholderText="DD/MM/YYYY"
            /> */}
            <DatePicker
              onChange={dobHandler}
              value={date}
              style={{ margin: 0, padding: 0 }}
              calendarIcon={false}
              clearIcon={false}
              customStyles={{ dateInput: { borderWidth: 0 } }}
              format={"dd/MM/yyyy"}
            />
            <BiChevronDown size={20} />
          </div>
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
