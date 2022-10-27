import { useState } from "react";
import Button from "../components/common/Button";
import Error from "../components/common/Error";
import Input from "../components/common/Input";
import ToggleButton from "../components/common/ToggleSwitch";

import { COLOR } from "../resources/theme/Color";
import Help from "./Help";

function RegistrationForm() {
  const [givenName, setGivenName] = useState("");
  const [givenNameError, setGivenNameError] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [retypePasswordError, setRetypePasswordError] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const register = () => {
    if (givenName == "") {
      setGivenNameError("Please enter your First Name");
      return;
    } else {
      setGivenNameError("");
    }
    if (email == "") {
      setemailError("Please enter Email");
      return;
    } else {
      setemailError("");
    }
    if (password == "") {
      setPasswordError("Please enter Password");
      return;
    } else {
      setPasswordError("");
    }
    if (retypePassword !== password) {
      setRetypePassword("Passwords do not match ");
      return;
    }
    if (postalCode == "") {
      setPostalCodeError("Please enter your Postal Code");
      return;
    }
  };

  return (
    <>
      <Input
        label={"Given Name*"}
        type={"text"}
        placeholder={"Given Name"}
        value={givenName}
        onChange={(text) => setGivenName(text.target.value)}
        errorText={givenNameError}
      />
      <Input
        label={"Surname"}
        type={"text"}
        placeholder={"Surname"}
        value={surName}
        onChange={(text) => setSurName(text.target.value)}
      />
      <Input
        label={"Email"}
        type={"email"}
        placeholder={"Email*"}
        value={email}
        onChange={(text) => setEmail(text.target.value)}
        errorText={emailError}
      />
      <Input
        label={"Password*"}
        type={"password"}
        placeholder={"Password*"}
        value={password}
        onChange={(text) => setPassword(text.target.value)}
        errorText={passwordError}
      />
      <Input
        label={"Retype Password"}
        type={"password"}
        placeholder={"Retype Password*"}
        value={retypePassword}
        onChange={(text) => setRetypePassword(text.target.value)}
        errorText={retypePasswordError}
      />
      <Input
        label={"Postal Code*"}
        type={"text"}
        placeholder={"Postal Code*"}
        value={postalCode}
        onChange={(text) => setPostalCode(text.target.value)}
        errorText={postalCodeError}
      />
      <div
        style={{
          fontSize: "14px",
          display: "flex",
          textAlign: "left",
          fontWeight: "500",
        }}
      >
        I consent to receive promotional marketing messages from Frasers
        Property Retail Management Pte. Ltd.
      </div>
      <ToggleButton />
      <Button
        customStyle={{
          backgroundColor: COLOR.BLACK,
          color: COLOR.WHITE,
        }}
        text="Finish"
        onClick={register}
      />
    </>
  );
}

const styles = {
  container: {},
  msg: {
    fontSize: 29,
    fontWeight: 600,
  },
  formContainer: {
    textAlign: "left",
    marginTop: 60,
  },
  section: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 15,
    marginTop: 40,
  },
  selectWrap: {
    width: "100%",
    border: "1px solid #DFE0E5",
    borderRadius: "5px",
    padding: "15px 30px",
  },
  label: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 5,
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
  txtfield: {
    appearance: "none",
    border: "1px solid #DFE0E5",
    padding: "25px 30px",
    borderRadius: "5px",
    width: "100%",
    fontSize: 20,
    fontWeight: 500,
    color: "#999",
    fontFamily: "Montserrat",
  },
  txtfieldLabel: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
  item: {
    marginBottom: 25,
  },
  txtfieldDisabled: {
    backgroundColor: "#F2F2F3",
    padding: "25px 30px",
    borderRadius: "5px",
  },
  disabledLabel: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 5,
  },
  disabledValue: {
    fontSize: 20,
    color: "#333",
    fontWeight: 500,
  },
  consent: {
    // fontSize: 19,
    // fontWeight: 500,
    // lineHeight: "130%",
    // paddingTop: 20,
  },
  toggleItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center",
  },
  toggleWrap: {
    fontSize: 20,
    color: "#999",
    fontWeight: 500,
  },
  agreement: {
    display: "flex",
    fontSize: 20,
    paddingBottom: 30,
  },
  checkboxWrap: {
    width: "7%",
  },
  agreeText: {
    width: "85%",
    fontSize: 16,
    lineHeight: "150%",
    fontWeight: 500,
  },
  link: {
    color: "#FA7268",
    textDecoration: "none",
  },
};

export default RegistrationForm;
