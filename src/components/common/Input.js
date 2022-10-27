import React from "react";
import Theme from "../../resources/theme/Theme";
import Error from "./Error";

export default function Input(props) {
  const { label, type, placeholder, value, onChange, errorText } = props;
  return (
    <div
      style={{
        // marginTop: "23px",
        marginTop: 45,
      }}
    >
      {value !== "" && <div style={Theme.label}>{label}</div>}
      <input
        type={type}
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
      {errorText != "" && <Error error={errorText} />}
    </div>
  );
}

const styles = {
  inputStyle: {
    // fontSize: 21,
    // height: "60px",
    // border: "1px solid #DFE0E5",
    // width: "100%",
    // fontFamily: "Montserrat",
    // fontWeight: 500,
    // paddingRight: "15px",
    // paddingLeft: "15px",
    // marginTop: "7px",
    fontSize: 21,
    padding: 27,
    border: "1px solid #DFE0E5",
    width: "100%",
    fontFamily: "Montserrat",
    fontWeight: 500,
  },
};
