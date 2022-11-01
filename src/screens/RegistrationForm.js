import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Button from "../components/common/Button";
import DropDownMenu from "../components/common/DropDownMenu";
import Error from "../components/common/Error";
import Input from "../components/common/Input";
import ToggleActive from "../components/common/ToggleActive";
import { validateEmail, validatePostalCode } from "../helper/validations";
import WebApi from "../helper/WebApi";
import { COLOR } from "../resources/theme/Color";
import {
  genderType,
  householdIncome,
  salutationType,
  residenceType,
} from "../resources/theme/Constants";
import Help from "./Help";
import Moment from "react-moment";
import moment from "moment";

function RegistrationForm() {
  const [salutation, setSalutation] = useState("");
  const [givenName, setGivenName] = useState("");
  const [givenNameError, setGivenNameError] = useState("");
  const [surName, setSurName] = useState("");
  const [gender, setGender] = useState("");
  const [income, setIncome] = useState("");
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
  const [residence, setResidence] = useState("");
  const [agreement, setAgreement] = useState(true);
  const [agreementError, setAgreementError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [callConsent, setCallConsent] = useState(false);
  const [dob, setDob] = useState(new Date());
  const [dobError, setDobError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (email.length > 0) {
      let valid = validateEmail(email);
      if (!valid) {
        setemailError("Email is invalid");
      } else {
        setemailError("");
      }
    }
    if (postalCode.length > 0) {
      let validCode = validatePostalCode(postalCode);
      if (validCode) {
        setPostalCodeError("Postal Code is invalid");
      } else {
        setPostalCodeError("");
      }
    }
  }, [email, postalCode, agreement]);

  const handleEmail = (text) => {
    setEmail(text.target.value);
  };

  const register = () => {
    setLoading(true);
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
    } else if (password.length < 8) {
      setPasswordError("Your password should contain at least 8 characters");
    } else {
      setPasswordError("");
    }

    if (retypePassword == "") {
      setRetypePasswordError("Passwords do not match");
      return;
    } else if (retypePassword != password) {
      setRetypePasswordError("Passwords do not match");
    } else {
      setRetypePasswordError("");
    }
    if (postalCode == "") {
      setPostalCodeError("Please enter your Postal Code");
      return;
    }
    if (!agreement) {
      setAgreementError("Please agree to our Terms of Use and Privacy Policy");
    } else {
      setAgreementError("");
    }
    let dd = moment(dob).date();
    let mm = moment(dob).month() + 1;
    let yyyy = moment(dob).year();
    let age = moment().diff(dob, "years");
    let date_str;
    if (age >= 18) {
      date_str = yyyy + "-" + mm + "-" + dd;
      setDobError("");
    } else {
      setDobError("You must be above 18 years old to join Frasers Experience");
    }

    new WebApi()
      .userSignUp(
        email,
        givenName,
        date_str,
        password,
        postalCode,
        callConsent ? "Y" : "N",
        emailConsent ? "Y" : "N",
        smsConsent ? "Y" : "N",
        surName,
        location?.state?.contact,
        gender
      )
      .then((response) => {
        setLoading(false);
        console.log("response====", response.data);
        if (response.data.error === "Invalid birth date") {
          setDobError("Invalid birth date");
          return;
        } else if (response.data.error == "Email used by other account") {
          setemailError("This Email is already registered");
          return;
        } else {
          setDobError("");
          setemailError("");
        }
      });
  };
  return (
    <>
      <div style={styles.description}>Tell us more about yourself.</div>
      <div style={styles.section}>Your profile</div>
      {/* salutation */}
      <DropDownMenu
        label={"Salutation"}
        Options={salutationType}
        value={salutation}
        optionsHandler={(text) => setSalutation(text.target.value)}
      />
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
        Options={genderType}
        value={gender}
        optionsHandler={(text) => setGender(text.target.value)}
        customStyle={{
          marginTop: 45,
        }}
      />
      <DropDownMenu
        label={"Date of Birth*"}
        dob={true}
        date={dob}
        dobHandler={(text) => setDob(text)}
        customStyle={{
          marginTop: 45,
        }}
        error={dobError}
      />
      <DropDownMenu
        label={"Household Income*"}
        Options={householdIncome}
        value={income}
        optionsHandler={(text) => setIncome(text.target.value)}
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
      />
      <Input
        label={"Street Name"}
        type={"text"}
        placeholder={"Street Name"}
        value={streetName}
        onChange={(text) => setStreetName(text.target.value)}
      />
      <Input
        label={"Unit No"}
        type={"text"}
        placeholder={"Unit No"}
        value={unitNo}
        onChange={(text) => setUnitNo(text.target.value)}
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
        Options={residenceType}
        value={residence}
        optionsHandler={(text) => setResidence(text.target.value)}
        customStyle={{
          marginTop: 45,
        }}
      />{" "}
      {/* section label */}
      <div style={styles.section}>Your contact details</div>
      {/* mobile no */}
      <div style={styles.txtfieldDisabled}>
        <div style={styles.disabledLabel}>Mobile No.*</div>
        <div style={styles.disabledValue}>{location?.state?.contact}</div>
      </div>
      {/* Email */}
      <Input
        label={"Email"}
        type={"email"}
        placeholder={"Email*"}
        value={email}
        onChange={handleEmail}
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
        <ToggleActive
          text={"Receive promotions via call"}
          active={callConsent}
          onClickHandler={() => setCallConsent(!callConsent)}
        />
        <ToggleActive
          text={"Receive promotions via email"}
          active={emailConsent}
          onClickHandler={() => setEmailConsent(!emailConsent)}
        />
        <ToggleActive
          text={"Receive promotions via SMS"}
          active={smsConsent}
          onClickHandler={() => setSmsConsent(!smsConsent)}
        />
      </div>
      <div style={styles.agreement}>
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={styles.checkboxWrap}>
            <input
              type="checkbox"
              checked={agreement}
              onChange={() => setAgreement(!agreement)}
            />
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
            on which include how my personal data may be collected, used,
            disclosed and processed by Frasers Property Retail Management Pte.
            Ltd. (“Frasers”) and its related corporations.
          </div>
        </div>

        <Error error={agreementError} />
      </div>
      <Button
        customStyle={{
          backgroundColor: COLOR.BLACK,
          color: COLOR.WHITE,
        }}
        text="Finish"
        onClick={register}
      />
      <Error error={agreementError} loading={loading} />
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
