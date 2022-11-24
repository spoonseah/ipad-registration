import React, { useState } from "react";
import Theme from "../../resources/theme/Theme";
import { COLOR } from "../../resources/theme/Color";
import Error from "./Error";

function DropDownMenu({
  label,
  customStyle,
  Options,
  value,
  optionsHandler,

  error,
}) {
  return (
    <>
      <div class="select-style" style={{ ...Theme.selectWrap, ...customStyle }}>
        <div style={Theme.label}>{label}</div>
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
      </div>
      <Error error={error} />
    </>
  );
}

export default DropDownMenu;

const styles = {
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
