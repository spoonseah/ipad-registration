import React from "react";
import Error from "./Error";

export default function Input(props) {
  const { type, placeholder, value, onChange, errorText, error } = props;
  return (
    <div>
      <input
        type={type}
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
      {<Error error={errorText} />}
    </div>
  );
}

const styles = {
  inputStyle: {
    fontSize: 21,
    height: "60px",
    marginTop: "30px",
    border: "1px solid #DFE0E5",
    width: "100%",
    fontFamily: "Montserrat",
    fontWeight: 500,
    paddingRight: "15px",
    paddingLeft: "15px",
  },
};
