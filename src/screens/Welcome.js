import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import FRxCards from "../components/common/FRxCards";
import { FRX_GIFT_CARD } from "../resources/theme/Constants";
import { IMAGES } from "../resources/theme/Images";

function Welcome() {
  let navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.title}> me to the FRx family!</div>

      <div style={styles.msg}>
        Get started by scanning the QR Code to download the Frasers
        Experience(FRx) app and unlock your exclusive member benefits.
      </div>
      <div style={styles.iconWrap}>
        {FRX_GIFT_CARD.map((item) => (
          <FRxCards img={item.img} text={item.text} />
        ))}
      </div>

      {/* qr-code */}
      <div style={styles.qrcode}>
        <img src={IMAGES.QRCODE} style={styles.qrImg} />
      </div>
      {/* /qr-code */}

      {/* download-frx */}
      <div style={styles.downloadFRx}>
        <img src={IMAGES.DOWNLOAD} style={styles.downloadImg} />
        <Button text="Start Over" onClick={() => navigate("/JoinNow")} />
      </div>
      {/* /download-frx */}
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    // marginLeft: "-40px",
    // marginRight: "-40px",
  },
  title: {
    fontSize: "25px",
    fontWeight: 600,
  },
  msg: {
    fontSize: "22px",
    paddingTop: 35,
    fontWeight: 400,
  },
  iconWrap: {
    display: "flex",
    marginTop: 35,
    justifyContent: "space-between",
  },

  qrcode: {
    marginTop: 40,
  },
  qrImg: {
    height: 230,
  },
  downloadFRx: {
    margin: "30px 0 50px 0",
  },
  downloadImg: {},
};

export default Welcome;
