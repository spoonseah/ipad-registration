import React from "react";
import { IMAGES } from "../resources/theme/Images";
function Header() {
  return (
    <div style={styles.container}>
      <img src={IMAGES.LOGO} style={styles.logo} />
    </div>
  );
}

const styles = {
  container: {
    paddingTop: 75,
    paddingBottom: 65,
  },
  logo: {
    height: 63,
  },
};

export default Header;
