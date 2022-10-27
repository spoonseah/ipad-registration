import { COLOR } from "../../resources/theme/Color";

function Error(props) {
  return <div style={styles.error}>{props.error}</div>;
}

const styles = {
  error: {
    // color: COLOR.primary,
    // fontSize: "15px",
    // marginTop: "5px",
    // fontWeight: 500,
    // textAlign: "left",

    color: "#FA7268",
    fontSize: 20,
    marginTop: "13px",
    fontWeight: 500,
    textAlign: "left",
  },
};

export default Error;
