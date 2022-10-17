function Button(props) {
  return (
    <div onClick={props.onClick} style={styles.button}>
      {props.text}
    </div>
  );
}

const styles = {
  button: {
    width: "100%",
    padding: "25px 0",
    fontSize: 22,
    fontWeight: 500,
    // color: "#fff",
    borderRadius: "3px",
    textAlign: "center",
    color: "red",
  },
};

export default Button;
