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
  genderType
} from "../resources/theme/Constants";
import Help from "./Help";
import moment from "moment";
import Header from "../components/common/Header";
import DatePickerModel from "../components/common/DatePickerModel";
import Theme from "../resources/theme/Theme";
import { TextField } from "@mui/material";

function RegistrationForm() {
  const [givenName, setGivenName] = useState("");
  const [givenNameError, setGivenNameError] = useState("");
  const [surName, setSurName] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [agreementError, setAgreementError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [callConsent, setCallConsent] = useState(false);
  const [dob, setDob] = useState("");
  const [dateString, setDateString] = useState("");
  const [dobError, setDobError] = useState("");
  const [loading, setLoading] = useState(false);

  const [is_date_modal_visible, setIs_date_modal_visible] = useState(false);
  const [date_picker_value, setDate_picker_value] = useState(
    moment().subtract(18, "years")
  );

  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 600000);
  }, []);

  const handleGivenName = useCallback(
    (text) => {
      setGivenName(text.target.value);
      if (text.target.value.length > 0) {
        setGivenNameError("");
      } else {
        setGivenNameError("Please enter your given name");
      }
    },
    [givenName]
  );

  const handleGender = useCallback(
    (text) => {
      setGender(text.target.value);
      if (text.target.value.length > 0) {
        setGenderError("");
      } else {
        setGenderError("Please select gender");
      }
    },
    [gender]
  );

  const handlePostalCode = useCallback(
    (text) => {
      setPostalCode(text.target.value);
      if (text.target.value.length > 0) {
        let validCode = validatePostalCode(text.target.value);
        if (!validCode) {
          setPostalCodeError("Please enter a valid Singapore postal code");
        } else {
          setPostalCodeError("");
        }
      } else {
        setPostalCodeError("Please enter postal code");
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
          setemailError("Please enter a valid email address");
        } else {
          setemailError("");
        }
      } else {
        setemailError("Please enter your email address");
      }
    },
    [email]
  );

  const handlePassword = useCallback(
    (text) => {
      setPassword(text.target.value);
      if (text.target.value == "") {
        setPasswordError("Please enter password");
      } else if (text.target.value.length < 8 && text.target.value.length > 0) {
        setPasswordError("Your password should contain at least 8 characters");
      } else {
        setPasswordError("");
      }
    },
    [password]
  );

  const handleAgreement = useCallback(() => {
    setAgreement(!agreement);
  }, [agreement]);

  const handleDob = useCallback(
    (text) => {
      setDate_picker_value(text);
      if (text != "") {
        let mm = text.$M + 1;
        let yyyy = text.$y;
        setDob(`${mm}/${yyyy}`);
        setDateString(yyyy + "-" + mm + "-01");
        setDobError("");
      } else {
        setDobError("Please enter your date of birth");
      }
    },
    [dob]
  );

  const register = () => {
    setLoading(true);
    if (givenName == "") {
      setGivenNameError("Please enter your given name");
      setLoading(false);
    }
    if (gender == "") {
      setGenderError("Please select gender");
      setLoading(false);
    }
    if (email == "") {
      setemailError("Please enter your email address");
      setLoading(false);
    }
    if (password == "") {
      setPasswordError("Please enter password");
      setLoading(false);
    }
    if (dob == "") {
      setDobError("Please enter your date of birth");
      setLoading(false);
    }
    if (location?.state?.selectedCountry == "65" && postalCode == "") {
      setPostalCodeError("Please enter postal code");
      setLoading(false);
    }
    if (!agreement) {
      setAgreementError("Please accept our Privacy Policy and Terms of Use");
      setLoading(false);
    }

    if (
      givenNameError == "" &&
      genderError == "" &&
      passwordError == "" &&
      emailError == "" &&
      dobError == "" &&
      (location?.state?.selectedCountry != "65" || postalCodeError == "") &&
      agreement
    ) {
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
          gender,
          location?.state?.selectedCountry
        )
        .then((response) => {
          console.log("response===", response.data);
          setLoading(false);
          if (response?.data?.data?.status == "success") {
            navigate("/Welcome");
          }
          if (response?.data?.error === "Invalid birth date") {
            setDobError("Invalid birth date");
            return;
          } else if (response?.data?.error == "Email used by other account") {
            setemailError("We are unable to process your request. Please check your details or contact us for further assistance.");
            return;
          } else if (response?.data?.error == "Invalid postal code") {
            setPostalCodeError("Please enter a valid Singapore postal code");
          } else {
            setDobError("");
            setemailError("");
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  function addSpaceforMobile(num) {
    const numStr = num.toString();
    if (numStr.length <= 4) return numStr;
    return numStr.slice(0, 4) + " " + numStr.slice(4);
  }

  return (
    <>
      <Header onClick={() => navigate("/")} />
      <div style={styles.description}>Tell us more about yourself.</div>
      <Input
        label={"Given Name*"}
        type={"text"}
        placeholder={"Given Name*"}
        value={givenName}
        onChange={handleGivenName}
        errorText={givenNameError}
      />
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
          marginTop: 30,
        }}
        error={genderError}
      />
      <div
        class="select-style"
        style={{ ...Theme.selectWrap, marginTop: 30 }}
        onClick={() => setIs_date_modal_visible(true)}
      >
        <div style={Theme.label}>{"Date of Birth"}</div>
        <TextField
          margin="none"
          style={{ display: "flex" }}
          placeholder={"Select"}
          value={dob}
          sx={{
            input: {
              color: COLOR.DARK_GRAY,
              fontSize: 20,
              fontWeight: 500,
              margin: 0,
              padding: 0,
              fontWeight: 500,
              fontFamily: "Montserrat",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% 50%",
              backgroundColor: "transparent",
            },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiInputBase-root": {
              "& input": {
                textAlign: "left",
              },
            },
          }}
        />
      </div>
      <DatePickerModel
        onOpen={is_date_modal_visible}
        onClose={() => setIs_date_modal_visible(false)}
        customStyle={{
          marginTop: 30,
        }}
        date={date_picker_value}
        dobHandler={handleDob}
        showDay={false}
      />
      {dobError != "" && <Error error={dobError} />}
      {location?.state?.selectedCountry == "65" && (
        <Input
          label={"Postal Code*"}
          type={"text"}
          placeholder={"Postal Code*"}
          value={postalCode}
          onChange={handlePostalCode}
          errorText={postalCodeError}
        />
      )}
      <div style={styles.section}>Your contact details</div>
      <div style={styles.txtfieldDisabled}>
        <div style={styles.disabledLabel}>Mobile No.*</div>
        <div style={styles.disabledValue}>{`+${location?.state.selectedCountry} ${addSpaceforMobile(location?.state?.contact)}`}</div>
      </div>
      <Input
        label={"Email*"}
        type={"email"}
        placeholder={"Email*"}
        value={email}
        onChange={handleEmail}
        errorText={emailError}
      />
      <div style={styles.section}>Set your password</div>
      <Input
        label={"Password*"}
        type={"password"}
        placeholder={"Password*"}
        value={password}
        onChange={handlePassword}
        errorText={passwordError}
      />
      <div style={styles.consent}>
        I consent to receive promotional marketing messages from Frasers
        Property Retail Management Pte. Ltd.
      </div>
      <div style={{ marginBottom: 25 }}>
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
        <div style={{ display: "flex" }}>
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
            I certify that I am at least 18 years old. I have read and agree to the{" "}
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
    textAlign: "left",
    fontSize: 19,
    fontWeight: 500,
    lineHeight: "130%",
    paddingTop: 20,
    marginBottom: 25,
  },
  agreement: {
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