import ButtonWhite from "../components/ButtonWhite";
import { IMAGES } from "../resources/theme/Images";

function Welcome() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Welcome to the FRx family!</div>

      <div style={styles.msg}>
        Get started by scanning the QR Code to<br />
        download the Frasers Experience(FRx) app<br />
        and unlock your exclusive member benefits.
      </div>

      {/* icons */}
      <div style={styles.iconWrap}>
        <div style={styles.item}>
          <div>
            <img src={IMAGES.EARN} style={styles.iconImg} />
          </div>
          <div style={styles.iconText}>
            Earn FRx Points with 2X Points on your birthday month
          </div>
        </div>

        <div style={styles.item}>
          <div>
            <img src={IMAGES.BUY} style={styles.iconImg} />
          </div>
          <div style={styles.iconText}>
            Buy or Redeem FRx Gift Cards & Retailer eVouchers
          </div>
        </div>

        <div style={styles.item}>
          <div>
            <img src={IMAGES.USE} style={styles.iconImg} />
          </div>
          <div style={styles.iconText}>
            Use FRx Gift Cards to offset your shopping spree
          </div>
        </div>

        <div style={styles.item}>
          <div>
            <img src={IMAGES.PARK} style={styles.iconImg} />
          </div>
          <div style={styles.iconText}>
            Enjoy free parking at our malls with FRx Carpark$
          </div>
        </div>
      </div>
      {/* /icons */}

      {/* qr-code */}
      <div style={styles.qrcode}>
        <img src={IMAGES.QRCODE} style={styles.qrImg} />
      </div>
      {/* /qr-code */}

      {/* download-frx */}
      <div style={styles.downloadFRx}>
        <img src={IMAGES.DOWNLOAD} style={styles.downloadImg} />
      </div>
      {/* /download-frx */}

      <ButtonWhite text="Start Over" />
    </div>
  );
}

const styles = {
  container: {
    marginLeft: "-40px",
    marginRight: "-40px",
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
  msg: {
    fontSize: 26,
    paddingTop: 35,
    fontWeight: 400,
  },
  iconWrap: {
    display: "flex",
    marginTop: 35,
    justifyContent: "space-between",
  },
  item: {
    width: "22%",
  },
  iconImg: {
    height: "65px",
  },
  iconText: {
    fontSize: 15,
    fontWeight: 600,
    marginTop: 10,
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
  downloadImg: {
    height: 90,
  },
};

export default Welcome;
