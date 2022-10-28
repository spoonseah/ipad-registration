import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Help from "./Help";
import PinInput from "react-pin-input";
import { COLOR } from "../resources/theme/Color";
import Theme from "../resources/theme/Theme";
import { useState } from "react";
import WebApi from "../helper/WebApi";
let hex_md5 = require("md5");

function OTP(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const resendOtp = () => {
    let c = location?.state?.verification_token + "#frasers";
    let checksum = hex_md5(c);

    new WebApi()
      .resendMobileOtpOnly(props, checksum, location?.state?.verification_token)
      .then((response) => {
        if (response?.data?.data?.status == "success") {
          // error: "We have resent you an OTP. Please check your messages",
          setOtpError("OTP has been resent");
        } else {
        }
      });
  };

  const verifyOtp = () => {
    if (location?.state?.verification_token == "" || otp == "") {
      setOtpError("Please enter OTP");
      setOtp("");
      return;
    }

    let c = location?.state?.verification_token + otp + "#frasers";
    let checksum = hex_md5(c);
    new WebApi()
      .verifyMobileOtpOnly(
        props,
        checksum,
        location?.state?.verification_token,
        otp
      )
      .then((res) => {
        console.log(
          "response verifyOtp",
          JSON.stringify(res.data.data.prefill.length == 0, null, 2)
        );
        if (res?.data?.data?.status == "success") {
          navigate("/RegistrationForm");
        } else {
          setOtpError("OTP is incorrect or has expired");
          setOtp("");
        }
      });
  };

  return (
    <>
      <div style={Theme.description}>
        Please enter the one time password (OTP)
        <br /> sent to:
      </div>

      <div style={styles.userno}>{`${location?.state?.contact}`}</div>

      <PinInput
        length={6}
        initialValue={otp}
        onChange={(value, index) => setOtp(value)}
        type="numeric"
        inputMode="number"
        style={{
          margin: "40px -10px 0",
          display: "flex",
          justifyContent: "center",
        }}
        inputStyle={{
          // borderColor: COLOR.GRAY,
          // color: COLOR.SECONDARY_BLACK,
          // fontSize: "20px",
          // marginRight: "5px",

          width: "15%",
          height: 85,
          textAlign: "center",
          margin: 7,
          fontSize: 29,
          boxShadow: "2px 3px 10px rgba(0,0,0,0.1)",
          border: 0,
          fontFamily: "Montserrat",
          border: "1px solid #DFE0E5",
          fontWeight: "500",
          color: "#333333",
        }}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />

      <div style={styles.buttonWrap}>
        <div style={styles.button}>
          <Button
            text="Resend OTP"
            customStyle={{
              backgroundColor: COLOR.GRAY,
              border: `0px`,
              color: COLOR.SECONDARY_BLACK,
            }}
            onClick={() => resendOtp()}
          />
        </div>
        <div style={styles.button}>
          <Button
            text="Submit"
            customStyle={{
              backgroundColor: COLOR.BLACK,
              border: `0px`,
              color: COLOR.WHITE,
            }}
            // onClick={() => navigate("/RegistrationForm")}
            onClick={verifyOtp}
          />
        </div>
      </div>

      <Help />
    </>
  );
}

const styles = {
  msg: {
    fontSize: 25,
    fontWeight: 400,
  },
  userno: {
    // fontWeight: 600,
    // fontSize: 30,
    // marginTop: 30,
    fontWeight: 600,
    fontSize: 30,
    marginTop: 30,
  },
  otpWrap: {
    display: "flex",
    justifyContent: "center",
    margin: "40px -10px 0 -10px",
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 0 0 0",
  },
  button: {
    width: "48.5%",
  },
};

export default OTP;
