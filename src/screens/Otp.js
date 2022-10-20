import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import Help from "./Help";
import PinInput from "react-pin-input";
import { COLOR } from "../resources/theme/Color";
import Theme from "../resources/theme/Theme";

function OTP() {
  let navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={Theme.description}>
        Please enter the one time password (OTP)
        <br /> sent to:
      </div>

      <div style={styles.userno}>9631 9467</div>

      <PinInput
        length={6}
        initialValue=""
        onChange={(value, index) => {}}
        type="numeric"
        inputMode="number"
        style={{
          marginTop: "25px",
        }}
        inputStyle={{
          // height: "65px",
          // width: "60px",
          borderColor: COLOR.GRAY,
          color: COLOR.SECONDARY_BLACK,
          fontSize: "20px",
          marginRight: "5px",
        }}
        onComplete={(value, index) => {}}
        autoSelect={true}
        cell
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
            onClick={() => navigate("/RegistrationForm")}
          />
        </div>
      </div>

      <Help />
    </div>
  );
}

const styles = {
  container: {},
  msg: {
    fontSize: 25,
    fontWeight: 400,
  },
  userno: {
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
