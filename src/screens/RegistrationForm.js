import { useState } from "react";
import Button from "../components/common/Button";
import DropDownMenu from "../components/common/DropDownMenu";
import Error from "../components/common/Error";
import Input from "../components/common/Input";
import ToggleActive from "../components/common/ToggleActive";
import { COLOR } from "../resources/theme/Color";
import {
  Gender,
  HouseholdIncome,
  Salutation,
  TypeOfResidence,
} from "../resources/theme/Constants";
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
      <DropDownMenu label={"Salutation"} Options={Salutation} />

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
        Options={Gender}
        customStyle={{
          marginTop: 45,
        }}
      />
      <DropDownMenu
        label={"Date of Birth*"}
        dob
        customStyle={{
          marginTop: 45,
        }}
      />
      <DropDownMenu
        label={"Household Income*"}
        Options={HouseholdIncome}
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
        Options={TypeOfResidence}
        customStyle={{
          marginTop: 45,
        }}
      />
      {/* section label */}
      <div style={styles.section}>Your contact details</div>

      {/* mobile no */}
      <div style={styles.txtfieldDisabled}>
        <div style={styles.disabledLabel}>Mobile No.*</div>
        <div style={styles.disabledValue}>9631 9467</div>
      </div>

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

      <div style={styles.consent}>
        I consent to receive promotional marketing messages from Frasers
        Property Retail Management Pte. Ltd.
      </div>
      <div
        style={{
          marginBottom: 25,
        }}
      >
        <ToggleActive text={"Receive promotions via call"} />
        <ToggleActive text={"Receive promotions via email"} />
        <ToggleActive text={"Receive promotions via SMS"} />
      </div>
      <div style={styles.agreement}>
        <div style={styles.checkboxWrap}>
          <input type="checkbox" />
        </div>
        <div style={styles.agreeText}>
          I have read and agree to the{" "}
          <a
            href="https://www.frasersexperience.com/terms-of-use"
            target="_blank"
            style={styles.link}
          >
            Terms of Use
          </a>
          ,{" "}
          <a
            href="https://www.frasersproperty.com/privacy-policy"
            target="_blank"
            style={styles.link}
          >
            Privacy Policy
          </a>
          , and the{" "}
          <a
            href="https://www.frasersexperience.com/privacy-policy-addendum/"
            target="_blank"
            style={styles.link}
          >
            Privacy Policy Addendum
          </a>{" "}
          on which include how my personal data may be collected, used, disclosed and processed by Frasers Property Retail Management Pte. Ltd. (“Frasers”) and its related corporations.
        </div>
      </div>
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
  description: {
    fontSize: 29,
    fontWeight: 600,
  },
  section: {
    display: "flex",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 15,
    marginTop: 40,
  },

  txtfieldDisabled: {
    backgroundColor: "#F2F2F3",
    padding: "25px 30px",
    borderRadius: "5px",
    textAlign: "left",
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
    // fontSize: "14px",
    // display: "flex",
    textAlign: "left",
    // fontWeight: "500",
    fontSize: 19,
    fontWeight: 500,
    lineHeight: "130%",
    paddingTop: 20,
    marginBottom: 25,
  },

  agreement: {
    // fontSize: 20,
    // paddingBottom: 30,
    display: "flex",
    marginBottom: 25,
  },
  checkboxWrap: {
    flex: 0.1,
    textAlign: "left",
  },
  agreeText: {
    flex: 0.9,
    textAlign: "left",
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
