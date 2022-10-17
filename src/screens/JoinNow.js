import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Error from "../components/common/Error";
import Help from "./Help";

function JoinNow() {
  let navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.title}>Join Now!</div>

      <div style={styles.msg}>
        Sign up as a Frasers Experience (FRx)
        <br />
        member and be rewarded.
      </div>

      <input
        type="text"
        style={styles.mobileNo}
        placeholder="Mobile No"
      ></input>

      <Error error="Please enter a valid Mobile No." />

      <div style={styles.note}>
        A one-time password (OTP) will be sent to this Mobile No. for
        verification.
      </div>

      <Button text="Next" onClick={() => navigate("/OTP")} />

      <Help />
    </div>
  );
}

const styles = {
  container: {},
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
  msg: {
    fontSize: 26,
    paddingTop: 35,
    fontWeight: 400,
  },
  mobileNo: {
    fontSize: 21,
    padding: 27,
    marginTop: 45,
    border: "1px solid #DFE0E5",
    width: "100%",
    fontFamily: "Montserrat",
    fontWeight: 500,
  },
  note: {
    fontSize: 21,
    fontWeight: 500,
    marginTop: 40,
    marginBottom: 60,
    lineHeight: "150%",
  },
};

export default JoinNow;
