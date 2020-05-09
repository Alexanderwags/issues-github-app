import React, { useState } from "react";
import PropTypes from "prop-types";
import Styles from "./styles/Styles.module.scss";
import { GetComments } from "../../Api/GetData";
function Header(props) {
  const [band, setband] = useState(false);
  const [img, setimg] = useState("");
  const [inf, setinf] = GetComments(props.img, band);
  try {
    if (Object.entries(inf).length === 0 && band === false) {
      console.log("vacia imagen");
      setband(true);
    } else if (Object.entries(inf).length > 0 && band) {
      console.log("hay imagen");
      setimg(inf.owner.avatar_url);
      setband(false);
    }
  } catch (error) {}

  return (
    <div className={Styles.header}>
      <img src={img} alt="header" />
      {console.log()}
    </div>
  );
}

Header.propTypes = {};

export default Header;
