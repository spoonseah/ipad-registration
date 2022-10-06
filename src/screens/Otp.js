import Button from "../components/Button";
import ButtonGrey from "../components/ButtonGrey";
import Error from "../components/Error";
import Help from "./Help";

function JoinNow() {
  return (
    <div style={styles.container}>
      <div style={styles.msg}>
        Please enter the one time password (OTP) sent to:
      </div>

      <div style={styles.userno}>9631 9467</div>

      <div style={styles.otpWrap}>
        <input type="text" maxlength="1" style={styles.digit}></input>
        <input type="text" maxlength="1" style={styles.digit}></input>
        <input type="text" maxlength="1" style={styles.digit}></input>
        <input type="text" maxlength="1" style={styles.digit}></input>
        <input type="text" maxlength="1" style={styles.digit}></input>
        <input type="text" maxlength="1" style={styles.digit}></input>
      </div>

      {/* <Error error="OTP is incorrect or has expired" /> */}

      <div style={styles.buttonWrap}>
        <div style={styles.button}>
          <ButtonGrey text="Resend OTP" />
        </div>
        <div style={styles.button}>
          <Button text="Submit" />
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
  digit: {
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

export default JoinNow;
