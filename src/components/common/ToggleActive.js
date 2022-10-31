import React, { useState } from "react";

function ToggleActive({ text, active, onClickHandler }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
      }}
    >
      <div
        style={{
          fontSize: 20,
          color: "#999",
          fontWeight: 500,
        }}
      >
        {text}
      </div>
      <div style={styles.toggle} onClick={onClickHandler}>
        <div style={active ? styles.knobActive : styles.knobInactive} />
      </div>
    </div>
  );
}

const styles = {
  toggle: {
    border: "1px solid #ccc",
    borderRadius: "20px",
    width: 90,
    height: 40,
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  knobActive: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "#FA7268",
    position: "absolute",
    right: 5,
  },
  knobInactive: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "#ddd",
    position: "absolute",
    left: 5,
  },
};

export default ToggleActive;
