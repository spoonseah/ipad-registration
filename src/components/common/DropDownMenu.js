import React, { useState } from "react";
import Theme from "../../resources/theme/Theme";
import { COLOR } from "../../resources/theme/Color";
import DatePicker from "react-date-picker";

function DropDownMenu({ label, customStyle, Options, dob }) {
  const [value, setValue] = useState("Select");
  const [date, setDate] = useState(new Date());

  const optionsHandler = (event) => {
    setValue(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  return (
    <div style={{ ...styles.selectWrap, ...customStyle }}>
      <div style={Theme.label}>{label}</div>
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
        onChange={dob ? dateHandler : optionsHandler}
      >
        {dob ? (
          <DatePicker onChange={dateHandler} value={date} />
        ) : (
          <>
            {Options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </>
        )}
      </select>
    </div>
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
