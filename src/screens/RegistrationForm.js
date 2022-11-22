import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
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
import moment from "moment";
import Header from "../components/common/Header";

function RegistrationForm() {
  const [salutation, setSalutation] = useState("");
  const [salutationError, setSalutationError] = useState("");
  const [givenName, setGivenName] = useState("");
  const [givenNameError, setGivenNameError] = useState("");
  const [surName, setSurName] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
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
  const [agreement, setAgreement] = useState(false);
  const [agreementError, setAgreementError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [callConsent, setCallConsent] = useState(false);
  const [dob, setDob] = useState("");
  const [dateString, setDateString] = useState("");
  const [dobError, setDobError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 600000);
  }, []);

  const handleSalutation = useCallback(
    (text) => {
      setSalutation(text.target.value);
      if (text.target.value != "") {
        setSalutationError("");
      } else {
        setSalutationError("Please select your Salutation");
      }
    },
    [salutation]
  );
  const handleGivenName = useCallback(
    (text) => {
      setGivenName(text.target.value);
      if (text.target.value.length > 0) {
        setGivenNameError("");
      } else {
        setGivenNameError("Please enter your Given Name");
      }
    },
    [givenName]
  );
  const handleGender = useCallback(
    (text) => {
      setGender(text.target.value);
      if (text.target.value != "") {
        setGenderError("");
      } else {
        setGenderError("Please select your Gender");
      }
    },
    [gender]
  );
  const handlePostalCode = useCallback(
    (text) => {
      setPostalCode(text.target.value);
      if (text.target.value.length > 0) {
        let validCode = validatePostalCode(text.target.value);
        console.log("valid", validCode);
        if (!validCode) {
          setPostalCodeError("Postal Code is invalid");
        } else {
          setPostalCodeError("");
        }
      } else {
        setPostalCodeError("Please enter your Postal Code");
      }
    },
    [postalCode]
  );
  const handleEmail = useCallback(
    (text) => {
      setEmail(text.target.value);
      if (text.target.value.length > 0) {
        let valid = validateEmail(text.target.value);
        if (!valid) {
          setemailError("Email is invalid");
        } else {
          setemailError("");
        }
      } else {
        setemailError("Please enter Email");
      }
    },
    [email]
  );
  const handlePassword = useCallback(
    (text) => {
      setPassword(text.target.value);
      if (text.target.value == "") {
        setPasswordError("Please enter Password");
      } else if (text.target.value.length < 8) {
        setPasswordError("Your password should contain at least 8 characters");
      } else {
        setPasswordError("");
      }
    },
    [password]
  );
  const handleRetypePassword = useCallback(
    (text) => {
      setRetypePassword(text.target.value);
      if (text.target.value != password || text.target.value == "") {
        setRetypePasswordError("Passwords do not match");
      } else {
        setRetypePasswordError("");
      }
    },
    [retypePassword]
  );
  const handleAgreement = useCallback(() => {
    setAgreement(!agreement);
  }, [agreement]);
  const handleDob = useCallback(
    (text) => {
      setDob(text);
      if (text == "") {
        setDobError("Please select your Date of Birth");
      } else {
        let dd = text.$D;
        let mm = text.$M + 1;
        let yyyy = text.$y;
        let age = moment().diff(`${yyyy}-${mm}-${dd}`, "years");
        console.log("ageeeee", age);
        if (age >= 18) {
          setDateString(yyyy + "-" + mm + "-" + dd);
          setDobError("");
        } else {
          setDobError("You must be over 18 years to join FRx");
        }
      }
    },
    [dob]
  );
  const register = () => {
    setLoading(true);
    if (salutation == "") {
      setSalutationError("Please select your Salutation");
    }
    if (givenName == "") {
      setGivenNameError("Please enter your Given Name");
    }
    if (gender == "") {
      setGenderError("Please select your Gender");
    }
    if (dob == "") {
      setDobError("Please select your Date of Birth");
    }
    if (postalCode == "") {
      setPostalCodeError("Please enter your Postal Code");
    }
    if (email == "") {
      setemailError("Please enter Email");
    }
    if (password == "") {
      setPasswordError("Please enter Password");
    }
    if (retypePassword == "") {
      setRetypePasswordError("Passwords do not match");
    }
    if (dob == "") {
      setDobError("Please select your Date of Birth");
    }
    if (!agreement) {
      setAgreementError("Please agree to our Terms of Use and Privacy Policy");
    } else {
      setAgreementError("");
    }

    new WebApi()
      .userSignUp(
        email,
        givenName,
        dateString,
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
        console.log("response=====", response.data);
        setLoading(false);
        console.log("response====", response.data.data.status);
        if (response.data.data.status == "success") {
          navigate("/Welcome");
        }
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
      <Header onClick={() => navigate("/")} />
      <div style={styles.description}>Tell us more about yourself.</div>
      <div style={styles.section}>Your profile</div>
      {/* salutation */}
      <DropDownMenu
        label={"Salutation*"}
        Options={salutationType}
        value={salutation}
        optionsHandler={handleSalutation}
        error={salutationError}
      />
      {/* given name */}
      <Input
        label={"Given Name*"}
        type={"text"}
        placeholder={"Given Name*"}
        value={givenName}
        onChange={handleGivenName}
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
        optionsHandler={handleGender}
        customStyle={{
          marginTop: 45,
        }}
        error={genderError}
      />
      <DropDownMenu
        label={"Date of Birth*"}
        dob={true}
        date={dob}
        dobHandler={handleDob}
        customStyle={{
          marginTop: 45,
        }}
        error={dobError}
      />
      {console.log("dtae of birth", dob)}
      <DropDownMenu
        label={"Household Income"}
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
        onChange={handlePostalCode}
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
        onChange={handlePassword}
        errorText={passwordError}
      />
      {/* Retype Password */}
      <Input
        label={"Retype Password"}
        type={"password"}
        placeholder={"Retype Password*"}
        value={retypePassword}
        onChange={handleRetypePassword}
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
            <label class="checkbox">
              <input
                type="checkbox"
                checked={agreement}
                onChange={handleAgreement}
              />
              <span class="checkmark"></span>
            </label>
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

        {!agreement && <Error error={agreementError} />}
      </div>
      <Button
        customStyle={{
          backgroundColor: COLOR.BLACK,
          color: COLOR.WHITE,
        }}
        text="Finish"
        onClick={register}
        loading={loading}
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
