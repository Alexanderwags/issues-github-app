import React from "react";
import PropTypes from "prop-types";
import Styles from "./styles/Styles.module.scss";
function Header(props) {
  return (
    <div className={Styles.header}>
      <img
        src="https://avatars2.githubusercontent.com/u/22032646?v=4"
        alt="header"
      />
    </div>
  );
}

Header.propTypes = {};

export default Header;
