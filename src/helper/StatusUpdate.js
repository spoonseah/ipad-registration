import { LOGIN_STATUS_CHANGED, MULTIPLE_LOGIN_DETECTED } from "./event-types";

// import MyStorage from "./MyStorage";

class StatusUpdate {
  static SESSION_INVALID = false;
  processResponse(data, props) {
    // console.log(props);
    if (!data || data.error) {
      let msg = data.error;
      if (
        msg &&
        typeof msg == "string" &&
        msg.toLowerCase().indexOf("invalid session token") > -1
      ) {
        this.clearData(props);
        return true;
      }
    }

    return false;
  }

  clearData = (props) => {
    if (StatusUpdate.SESSION_INVALID) {
      return;
    }

    StatusUpdate.SESSION_INVALID = true;

    window.dispatchEvent(MULTIPLE_LOGIN_DETECTED, {
      multiple_login_detected: true,
    });
    window.dispatchEvent(LOGIN_STATUS_CHANGED, {
      logout: true,
    });
    // new MyStorage()
    //   .clearStorage()
    //   .then(() => {
    //     if (props && props.setUserData) {
    //       props.setUserData("", null);
    //     }
    //   })
    //   .catch((e) => {});
  };
}

export default StatusUpdate;
