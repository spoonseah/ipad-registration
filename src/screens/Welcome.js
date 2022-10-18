import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import FRxCards from "../components/common/FRxCards";
import { COLOR } from "../resources/theme/Color";
import { FRX_GIFT_CARD } from "../resources/theme/Constants";
import { IMAGES } from "../resources/theme/Images";

function Welcome() {
  let navigate = useNavigate();
  return (
    <div style={styles.container}>
      {/* title */}
      <div style={styles.title}>Welcome to the FRx family!</div>

      {/* description */}
      <div style={styles.msg}>
        Get started by scanning the QR Code to download the Frasers
        Experience(FRx) app and unlock your exclusive member benefits.
      </div>

      {/* icons with text */}
      <div style={styles.iconWrap}>
        {FRX_GIFT_CARD.map((item, index) => (
          <FRxCards key={index} img={item.img} text={item.text} />
        ))}
      </div>

      {/* qr-code */}
      <div style={styles.qrcode}>
        <img src={IMAGES.QRCODE} style={styles.qrImg} />
      </div>

      {/* download-frx */}
      <img src={IMAGES.DOWNLOAD} style={styles.downloadImg} />

      {/* button */}
      <Button text="Start Over" onClick={() => navigate("/JoinNow")} />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
  },
  title: {
    fontSize: "25px",
    fontWeight: 600,
  },
  msg: {
    fontSize: "20px",
    paddingTop: 35,
    fontWeight: 400,
    color: COLOR.SECONDARY_BLACK,
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
    height: "185px",
    width: "185px",
  },
  downloadImg: {
    marginTop: "20px",
    height: "75px",
  },
};

export default Welcome;
