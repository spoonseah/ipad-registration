import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import WebApi from "../helper/WebApi";
import { COLOR } from "../resources/theme/Color";
import Theme from "../resources/theme/Theme";
import Help from "./Help";
let hex_md5 = require("md5");
function JoinNow(props) {
  const countries = [
    {
      code: "+65",
      flag: "/images/flag-sg.png",
      name: "Singapore",
    },
    {
      code: "+86",
      flag: "/images/flag-cn.png",
      name: "China",
    },
    {
      code: "+91",
      flag: "/images/flag-in.png",
      name: "India",
    },
    {
      code: "+62",
      flag: "/images/flag-id.png",
      name: "Indonesia",
    },
    {
      code: "+60",
      flag: "/images/flag-my.png",
      name: "Malaysia",
    },
    {
      code: "+63",
      flag: "/images/flag-ph.png",
      name: "Philippines",
    },
    {
      code: "+66",
      flag: "/images/flag-th.png",
      name: "Thailand",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showContactError, setShowContactError] = useState(false);
  const [contactNo, setContactNo] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [contact, setContact] = useState("");
  const [contact_error_text, setContact_error_text] = useState("");
  const [verification_token, setVerification_token] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (contactNo.length > 0) {
      setErrorMessage('');
      setShowContactError(false);
    }
  }, [contactNo]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };


  const _joinNow = () => {
    setLoading(true);
    let c = selectedCountry?.code?.substring(1) + '' + contactNo + '#frasers';
    let checksum = hex_md5(c);

    if (!contactNo) {
      setErrorMessage(`Please enter a valid ${selectedCountry?.name} mobile no.`);
      setShowContactError(true);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      new WebApi()
        .PreJoinSignup(props, contactNo, checksum, selectedCountry?.code?.substring(1))
        .then((response) => {
          console.log("here is the response---->",response);
          if (response?.data?.data.status == "success") {
            setLoading(false);
            setVerification_token(response?.data?.data.verification_code);
            navigate("/OTP", {
              state: {
                contact: contactNo,
                selectedCountry: selectedCountry?.code?.substring(1),
                verification_token: response?.data?.data?.verification_code,
              },
            });
          } else {
            setLoading(false);
            if (response?.data?.data.status === 'fail') {
              if (response?.data?.data?.reason.includes('Mobile used by other account')) {
                setErrorMessage('This Mobile No. is already registered.');
                setShowContactError(true);
              }else{
                setErrorMessage(`Please enter a valid ${selectedCountry?.name} mobile no.`);
                setShowContactError(true);
              }
            }else{
              setErrorMessage(`Please enter a valid ${selectedCountry?.name} mobile no.`);
              setShowContactError(true);
            }
          }
        })
        .catch(() => {});
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Header onClick={() => navigate("/")} />

      <div style={Theme.title}>Join Now!</div>

      <div style={Theme.description}>
        Sign up as a Frasers Experience (FRx) <br />
        member and be rewarded.
      </div>
          <div style={{marginTop:20}} className="mobile-no">
            <div
              className="country-code"
              id="countryCode"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="code">{selectedCountry.code}</div>
              <div className="arrow">
                <img
                  src="/images/down-arrow-grey.svg"
                  alt="Dropdown arrow"
                />
              </div>
            </div>
            {isDropdownOpen && (
              <div
                style={{ opacity: 1, visibility: "visible", top: "65px" }}
                className={`dropdown active`}
                id="selectCountry"
              >
                {countries.map((country, index) => (
                  <div
                  style={{marginTop:5}}
                    className="item"
                    key={index}
                    onClick={() => handleCountrySelect(country)}
                  >
                    <div className="flag">
                      <img src={country.flag} alt={`${country.name} Flag`} />
                    </div>
                    <div className="text">
                      {country.name} ({country.code})
                    </div>
                  </div>
                ))}
              </div>
            )}
            <input
              type="text"
              placeholder="Mobile No.*"
              id="mobileInput"
              onChange={(e) => {
                console.log("i am called--->", e.target.value);
                setContactNo(e.target.value);
                setErrorMessage('');
                setShowContactError(false);
              }}
              value={contactNo}
            />
          </div>
          {showContactError && <div className="error-message">{errorMessage}</div>}
      <div style={Theme.oneTimeOTP}>
        A one-time password (OTP) will be sent to this <br /> Mobile No. for
        verification.
      </div>
      <Button
        text="Next"
        onClick={_joinNow}
        customStyle={{
          backgroundColor: COLOR.BLACK,
          color: COLOR.WHITE,
          // marginTop: "35px",
        }}
        loading={loading}
      />

      <Help />
    </div>
  );
}

export default JoinNow;
