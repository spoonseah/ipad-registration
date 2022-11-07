import { COLOR } from "./Color";

const Theme = {
  globalStyle: {
    fontSize: 14,
    maxWidth: 800,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 115px 100px 115px",
    color: "#333",
  },
  title: {
    // fontSize: "25px",
    fontSize: 30,
    fontWeight: 600,
    marginBottom: "35px",
  },
  description: {
    // fontSize: "20px",
    // marginTop: "18px",
    // fontWeight: 500,
    // color: COLOR.SECONDARY_BLACK,
    fontSize: 26,
    fontWeight: 400,
  },
  otpDescription: {
    fontSize: "25px",
    fontWeight: 400,
  },
  oneTimeOTP: {
    // fontSize: "18px",
    // fontWeight: 500,
    // marginTop: "25px",
    // lineHeight: "150%",

    fontSize: 21,
    fontWeight: 500,
    marginTop: 40,
    marginBottom: 60,
    lineHeight: "150%",
  },
  label: {
    display: "flex",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
  spinner: {
    border: "10px solid #f3f3f3",
    // border-radius: 50%,
    width: "80px",
    height: "80px",
    animation: `spin 1s linear infinite`,
  },
};

export default Theme;
