import React from "react";
import { COLOR } from "../../resources/theme/Color";

export default function FRxCards({ img, text }) {
  return (
    <div style={styles.item}>
      <div>
        <img src={img} style={styles.iconImg} />
      </div>
      <div style={styles.iconText}>{text}</div>
    </div>
  );
}

const styles = {
  item: {
    width: "22%",
  },
  iconImg: {
    height: "60px",
  },
  iconText: {
    fontSize: "15px",
    fontWeight: 500,
    marginTop: 10,
    color: COLOR.SECONDARY_BLACK,
  },
};
