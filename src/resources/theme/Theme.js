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
    fontSize: "25px",
    fontWeight: 600,
  },
  description: {
    fontSize: "20px",
    marginTop: "18px",
    fontWeight: 500,
    color: COLOR.SECONDARY_BLACK,
  },
  oneTimeOTP: {
    fontSize: "18px",
    fontWeight: 500,
    marginTop: "25px",
    lineHeight: "150%",
  },
};

export default Theme;
