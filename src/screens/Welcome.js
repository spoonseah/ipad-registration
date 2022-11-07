import { useNavigate, redirect as Redirect } from "react-router";
import Button from "../components/common/Button";
import FRxCards from "../components/common/FRxCards";
import { COLOR } from "../resources/theme/Color";
import { FRX_GIFT_CARD } from "../resources/theme/Constants";
import { IMAGES } from "../resources/theme/Images";
import Theme from "../resources/theme/Theme";

function Welcome() {
  let navigate = useNavigate();
  // setTimeout(() => {
  //   navigate("/");
  // }, 5000);
  return (
    <>
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
      <Button
        text="Start Over"
        onClick={() => navigate("/")}
        customStyle={{
          border: `0.6px solid ${COLOR.SECONDARY_BLACK}`,
          color: COLOR.SECONDARY_BLACK,
        }}
      />
    </>
  );
}

const styles = {
  iconWrap: {
    // same

    display: "flex",
    marginTop: 35,
    justifyContent: "space-between",
  },
  qrcode: {
    marginTop: 40,
  },
  qrImg: {
    // height: "185px",
    // width: "185px",
    height: 230,
  },
  downloadImg: {
    margin: "30px 0 50px 0",
    // marginTop: "20px",
    // height: "75px",
  },
};

export default Welcome;
