import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import SvgInfo from "../../assets/Svg/info";
import SvgMessages from "../../assets/Svg/messages";

const RowData = ({
  title = "create-react-app tutorial from reactjs.org differs than cmd line options",
  Label,
  messages,
  number,
  user,
  updated_at,
  state,
}) => {
  return (
    <div className={Styles.rowdata}>
      <div>
        <Router>
          <Link to="/">
            <SvgInfo />
          </Link>
        </Router>
      </div>
      <div className={Styles.body}>
        <Router>
          <Link to="/">{title}</Link>
          <Link to="/">{Label}</Link>
          <Link to="/">{messages}</Link>
        </Router>

        <div className={Styles.Footer}>
          <p className={Styles.textgray}>#{number}</p>
          <p className={Styles.textgray}>{state}</p>
          <p className={Styles.textgray}>{updated_at}</p>
          <p className={Styles.textgray}>by {user}</p>
        </div>
      </div>
      <div className={Styles.messages}>
        <Router>
          <Link to="/">{messages}</Link>
        </Router>
        <Router>
          <Link to="/">
            <SvgMessages />
          </Link>
          <span>1</span>
        </Router>
      </div>
    </div>
  );
};

RowData.propTypes = {
  title: PropTypes.string,
};

export default RowData;
