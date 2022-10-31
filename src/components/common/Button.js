import { PuffLoader } from "react-spinners";
import { COLOR } from "../../resources/theme/Color";

function Button(props) {
  return (
    <div
      onClick={props.onClick}
      style={{ ...styles.button, ...props.customStyle }}
    >
      {props.loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PuffLoader
            color={COLOR.WHITE}
            loading={props.loading}
            size={27}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        props.text
      )}
    </div>
  );
}

const styles = {
  button: {
    // height: "45px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // border: `0.6px solid ${COLOR.SECONDARY_BLACK}`,
    // marginTop: "20px",
    // color: COLOR.BLACK,

    width: "100%",
    padding: "25px 0",
    fontSize: 22,
    fontWeight: 500,
    color: "#fff",
    borderRadius: "3px",
    textAlign: "center",
  },
};

export default Button;
