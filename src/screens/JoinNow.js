import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Error from "../components/common/Error";
import Input from "../components/common/Input";
import { validateContactNo } from "../helper/validations";
import { COLOR } from "../resources/theme/Color";
import Theme from "../resources/theme/Theme";
import Help from "./Help";
let hex_md5 = require("md5");
function JoinNow() {
  const [contact, setContact] = useState("");
  const [contact_error_text, setContact_error_text] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (contact.length > 0) {
      let valid = validateContactNo(contact);
      if (!valid) {
        setContact_error_text("Please enter a valid Mobile No.");
      } else {
        setContact_error_text("");
      }
    }
  }, [contact]);

  const handleContact = (text) => {
    setContact(text.target.value);
  };

  const joinNow = () => {
    //  navigate("/OTP");
    let c = contact + "#frasers";
    let checksum = hex_md5(c);

    if (contact === "") {
      setContact_error_text("Please enter Mobile No.");
      return;
    }
    try {
      navigate("/OTP");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div style={Theme.title}>Join Now!</div>

      <div style={Theme.description}>
        Sign up as a Frasers Experience (FRx) <br />
        member and be rewarded.
      </div>
      <Input
        type={"text"}
        placeholder={"Mobile No."}
        value={contact}
        onChange={handleContact}
        errorText={contact_error_text}
      />
      <div style={Theme.oneTimeOTP}>
        A one-time password (OTP) will be sent to this <br /> Mobile No. for
        verification.
      </div>

      <Button
        text="Next"
        onClick={joinNow}
        customStyle={{
          backgroundColor: COLOR.BLACK,
          color: COLOR.WHITE,
          marginTop: "35px",
        }}
      />

      <Help />
    </div>
  );
}

export default JoinNow;
