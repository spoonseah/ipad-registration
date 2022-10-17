import React from "react";

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
    height: "65px",
  },
  iconText: {
    fontSize: 15,
    fontWeight: 600,
    marginTop: 10,
  },
};
