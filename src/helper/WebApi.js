import axios from "axios";
import StatusUpdate from "./StatusUpdate";

const _TIME_OUT = 15000;
const api_version = 31;
export default class WebApi {
  _BASE_URL = `https://frxapi.tgate.sg/stage/`;
  PRE_JOIN = "auth/pre_join";
  ARTICLE_LIST = "listarticle";
  ARTICLE_DETAIL = "articledetail";
  RESEND_MOBILE_OTP_ONLY = "auth/resend_mobile_otp_only";
  VERIFY_MOBILE_OTP_ONLY = "auth/verify_mobile_otp_only";

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
        headers: _headers,
      });
      console.log("url response", response);
      // setTimeout(() => {
      //   new StatusUpdate().processResponse(response.data, props);
      // }, 400);

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

  PreJoinSignup(props, _mobileNumber, _checksum) {
    let url = this.PRE_JOIN;
    let body = {
      mobilephonenumber: _mobileNumber,
      checksum: _checksum,
    };
    return this.sendPostRequest(props, url, body);
  }

  resendMobileOtpOnly(props, _checksum, _verification_token) {
    let url = this.RESEND_MOBILE_OTP_ONLY;
    let body = {
      checksum: _checksum,
      verification_token: _verification_token,
    };
    return this.sendPostRequest(props, url, body);
  }
  verifyMobileOtpOnly(props, _checksum, _verification_token, _otp) {
    let url = this.VERIFY_MOBILE_OTP_ONLY;
    let body = {
      checksum: _checksum,
      verification_token: _verification_token,
      otp: _otp,
    };
    return this.sendPostRequest(props, url, body);
  }
}
