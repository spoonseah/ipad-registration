import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import FRxCards from "../components/common/FRxCards";
import { COLOR } from "../resources/theme/Color";
import { FRX_GIFT_CARD } from "../resources/theme/Constants";
import { IMAGES } from "../resources/theme/Images";
import Theme from "../resources/theme/Theme";

function Welcome() {
  let navigate = useNavigate();
  return (
    <div style={styles.container}>
      {/* title */}
      <div style={Theme.title}>Welcome to the FRx family!</div>

      {/* description */}
      <div style={Theme.description}>
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
