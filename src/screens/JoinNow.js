import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Error from "../components/common/Error";
import { COLOR } from "../resources/theme/Color";
import Theme from "../resources/theme/Theme";
import Help from "./Help";

function JoinNow() {
  let navigate = useNavigate();

  return (
    <div>
      <div style={Theme.title}>Join Now!</div>

      <div style={Theme.description}>
        Sign up as a Frasers Experience (FRx) <br />
        member and be rewarded.
      </div>

      <input
        type="text"
        style={styles.mobileNo}
        placeholder="Mobile No"
      ></input>

      <Error error="Please enter a valid Mobile No." />

      <div style={styles.note}>
        A one-time password (OTP) will be sent to this <br /> Mobile No. for
        verification.
      </div>

      <Button
        text="Next"
        onClick={() => navigate("/OTP")}
        customStyle={{
          backgroundColor: COLOR.BLACK,
          color: COLOR.WHITE,
          marginTop: "40px",
        }}
      />

      <Help />
    </div>
  );
}

const styles = {
  mobileNo: {
    fontSize: 21,
    height: "60px",
    marginTop: "30px",
    border: "1px solid #DFE0E5",
    width: "100%",
    fontFamily: "Montserrat",
    fontWeight: 500,
    paddingRight: "15px",
    paddingLeft: "15px",
  },
  note: {
    fontSize: 21,
    fontWeight: 500,
    marginTop: "25px",
    lineHeight: "150%",
  },
};

export default JoinNow;
