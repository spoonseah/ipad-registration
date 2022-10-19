import axios from "axios";
import { REACT_APP_FRX_API_BASE_URL } from "@env";
import StatusUpdate from "./StatusUpdate";

const _TIME_OUT = 15000;
const api_version = 31;

export default class WebApi {
  _BASE_URL = REACT_APP_FRX_API_BASE_URL;
  PRE_JOIN = "auth/pre_join";
  ARTICLE_LIST = "listarticle";
  ARTICLE_DETAIL = "articledetail";

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
      let response = await axios({
        method: "post",
        url: _url,
        data: _params,
        timeout: _TIME_OUT,
        headers: _headers,
      });
      setTimeout(() => {
        new StatusUpdate().processResponse(response.data, props);
      }, 400);

      return response;
    } catch (error) {
      let err = [];
      err.error = error;
      err.no_result = true;
      setTimeout(() => {
        console.log("Unable to connect with server post req");
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
}
