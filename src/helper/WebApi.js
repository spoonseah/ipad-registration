import axios from "axios";
import StatusUpdate from "./StatusUpdate";

const _TIME_OUT = 15000;
const api_version = 31;
export default class WebApi {
  _BASE_URL = `https://frxapi-stage.tgate.sg/live/`;
  PRE_JOIN = "auth/pre_join";
  ARTICLE_LIST = "listarticle";
  ARTICLE_DETAIL = "articledetail";
  RESEND_MOBILE_OTP_ONLY = "auth/resend_mobile_otp_only";
  VERIFY_MOBILE_OTP_ONLY = "icolumn/proxy";
  USER_SIGNUP = "icolumn/proxy";

  async sendPostRequest(props, _url, _params, custom_headers) {
    _url = this._BASE_URL + _url;

    if (_url.indexOf("?") >= 0) {
      _url = _url + "&" + "ts=" + Date.now().toString();
    } else {
      _url = _url + "?" + "ts=" + Date.now().toString();
    }

    let _headers = custom_headers;

    if (!_headers) {
      _headers = [];
    }
    _headers["Content-Type"] = "application/json";

    if (!_params) {
      _params = {};
    }

    if (_url !== this.ARTICLE_DETAIL && _url !== this.ARTICLE_LIST) {
      _params.version = api_version;
    }
    try {
      console.log("url respinseeee", _url, _params, _TIME_OUT, _headers);
      let response = await axios({
        method: "post",
        url: _url,
        data: _params,
        timeout: _TIME_OUT,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("url response", response);
      setTimeout(() => {
        // new StatusUpdate().processResponse(response.data, props);
      }, 400);

      return response;
    } catch (error) {
      let err = [];
      err.error = error;
      err.no_result = true;
      setTimeout(() => {
        console.log("Unable to connect with server post req", error);
      }, 400);
      return err;
    }
  }

  PreJoinSignup(props, _mobileNumber, _checksum, selectedCountry) {
    let url = this.PRE_JOIN;
    let body = {
      fn: "pre_join",
      mobilecountryprefix:selectedCountry,
      mobilephonenumber: _mobileNumber,
      checksum: _checksum,
      website:true,
      app_name: 'register'
    };
    return this.sendPostRequest(props, url, body);
  }

  resendMobileOtpOnly(props, _checksum, _verification_token) {
    let url = this.RESEND_MOBILE_OTP_ONLY;
    let body = {
      checksum: _checksum,
      verification_token: _verification_token,
      website: true,
      app_name: 'register'
    };
    return this.sendPostRequest(props, url, body);
  }
  verifyMobileOtpOnly(props, _checksum, _verification_token, _otp) {
    let url = this.VERIFY_MOBILE_OTP_ONLY;
    let body = {
      fn : 'verify_mobile_otp',
      checksum: _checksum,
      verification_token: _verification_token,
      otp: _otp,
      website:true,
      app_name: 'register'
    };
    console.log("body==**", url, body);
    return this.sendPostRequest(props, url, body);
  }
  userSignUp(
    _user_name,
    _givenname,
    _birthdate,
    _password,
    postal_code,
    callconsent,
    emailconsent,
    smsconsent,
    _familyname,
    _contact,
    _gender,
    selectedCountry
  ) {
    let url = this.USER_SIGNUP;
    let body = {
      fn :'join',
      email: _user_name,
      password: _password,
      givenname: _givenname,
      familyname: _familyname,
      mobilephonenumber: _contact,
      mobilecountryprefix:selectedCountry,
      callconsent: callconsent,
      emailconsent: emailconsent,
      smsconsent: smsconsent,
      website:true,
      app_name: 'register'
    };    
    if(_birthdate != null && _birthdate != ""){
      body.birthdate = _birthdate;
    }
    if(postal_code != null && postal_code != ""){
      body.postalcode = postal_code;
    }    
    if (_gender == "Male") {
      body.gender = "M";
    } else if (_gender == "Female") {
      body.gender = "F";
    }else if(_gender == "Prefer-not-to-say"){
      body.gender = "P";
    }
    console.log("body===***", body);
    return this.sendPostRequest(null, url, body);
  }
}
