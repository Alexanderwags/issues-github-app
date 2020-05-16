import React from "react";
import Styles from "./styles/Styles.module.scss";
import FigureFooter from "../../assets/Svg/Footer";
function Footer() {
  return (
    <div className={Styles.footer}>
      <FigureFooter />
      <p className={Styles.name}>Developed by : @William_ws7</p>
    </div>
  );
}

export default Footer;
