import { useState } from "react";
import Button from "../components/common/Button";
import DropDownMenu from "../components/common/DropDownMenu";
import Error from "../components/common/Error";
import Input from "../components/common/Input";
import ToggleButton from "../components/common/ToggleSwitch";

import { COLOR } from "../resources/theme/Color";
import Theme from "../resources/theme/Theme";
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
  const [blockNo, setBlockNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [unitNo, setUnitNo] = useState("");
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
      <div style={styles.description}>Tell us more about yourself.</div>
      <div style={styles.section}>Your profile</div>

      {/* salutation */}
      <DropDownMenu label={"Salutation"} />

      {/* given name */}
      <Input
        label={"Given Name*"}
        type={"text"}
        placeholder={"Given Name"}
        value={givenName}
        onChange={(text) => setGivenName(text.target.value)}
        errorText={givenNameError}
      />

      {/* surname */}
      <Input
        label={"Surname"}
        type={"text"}
        placeholder={"Surname"}
        value={surName}
        onChange={(text) => setSurName(text.target.value)}
      />
      <DropDownMenu
        label={"Gender*"}
        customStyle={{
          marginTop: 45,
        }}
      />
      <DropDownMenu
        label={"Date of Birth*"}
        customStyle={{
          marginTop: 45,
        }}
      />
      <DropDownMenu
        label={"Household Income*"}
        customStyle={{
          marginTop: 45,
        }}
      />
      <div style={styles.section}>Your address</div>

      <Input
        label={"Block No"}
        type={"text"}
        placeholder={"Block No"}
        value={blockNo}
        onChange={(text) => setBlockNo(text.target.value)}
        errorText={givenNameError}
      />
      <Input
        label={"Street Name"}
        type={"text"}
        placeholder={"Street Name"}
        value={streetName}
        onChange={(text) => setStreetName(text.target.value)}
        errorText={givenNameError}
      />
      <Input
        label={"Unit No"}
        type={"text"}
        placeholder={"Unit No"}
        value={unitNo}
        onChange={(text) => setUnitNo(text.target.value)}
        errorText={givenNameError}
      />
      {/* Postal Code */}
      <Input
        label={"Postal Code*"}
        type={"text"}
        placeholder={"Postal Code*"}
        value={postalCode}
        onChange={(text) => setPostalCode(text.target.value)}
        errorText={postalCodeError}
      />
      <DropDownMenu
        label={"Type of Residence"}
        customStyle={{
          marginTop: 45,
        }}
      />

      {/* Email */}
      <Input
        label={"Email"}
        type={"email"}
        placeholder={"Email*"}
        value={email}
        onChange={(text) => setEmail(text.target.value)}
        errorText={emailError}
      />
      <div style={styles.section}>Set your password</div>

      {/* Password */}
      <Input
        label={"Password*"}
        type={"password"}
        placeholder={"Password*"}
        value={password}
        onChange={(text) => setPassword(text.target.value)}
        errorText={passwordError}
      />
      {/* Retype Password */}
      <Input
        label={"Retype Password"}
        type={"password"}
        placeholder={"Retype Password*"}
        value={retypePassword}
        onChange={(text) => setRetypePassword(text.target.value)}
        errorText={retypePasswordError}
      />

      <div
        style={{
          // fontSize: "14px",
          // display: "flex",
          textAlign: "left",
          // fontWeight: "500",
          fontSize: 19,
          fontWeight: 500,
          lineHeight: "130%",
          paddingTop: 20,
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
      <Help />
    </>
  );
}

const styles = {
  section: {
    display: "flex",
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
  description: {
    fontSize: 29,
    fontWeight: 600,
  },
};

export default RegistrationForm;
