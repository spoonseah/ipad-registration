import React from "react";
import Theme from "../../resources/theme/Theme";
import { FiChevronDown } from "react-icons/fi";
import { COLOR } from "../../resources/theme/Color";
function DropDownMenu({ label, options, customStyle }) {
  return (
    <div style={{ ...styles.selectWrap, ...customStyle }}>
      <div style={Theme.label}>{label}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <select style={styles.select}>
          {/* {options.map((options) => {
            <option value={options}>{options}</option>;
          })} */}
        </select>
        <FiChevronDown size={22} color={COLOR.DARK_GRAY} />
      </div>
    </div>
  );
}

export default DropDownMenu;

const styles = {
  selectWrap: {
    width: "100%",
    border: "1px solid #DFE0E5",
    borderRadius: "5px",
    padding: "15px 30px",
  },
  select: {
    appearance: "none",
    width: "100%",
    fontSize: 20,
    border: 0,
    fontWeight: 500,
    fontFamily: "Montserrat",
    color: "#999",
    backgroundImage: 'url("../images/down-arrow.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 50%",
  },
};
