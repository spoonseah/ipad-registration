import { COLOR } from "../../resources/theme/Color";

function Button(props) {
  return (
    <div
      onClick={props.onClick}
      style={{ ...styles.button, ...props.customStyle }}
    >
      {props.text}
    </div>
  );
}

const styles = {
  button: {
    height: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `0.6px solid ${COLOR.SECONDARY_BLACK}`,
    marginTop: "20px",
    color: COLOR.BLACK,
  },
};

export default Button;
