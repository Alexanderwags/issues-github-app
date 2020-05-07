import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import SvgInfo from "../../assets/Svg/info";
import SvgMessages from "../../assets/Svg/messages";

const RowData = ({ data }) => {
  return (
    <div className={Styles.rowdata}>
      <div className={Styles.infor}>
        <Router>
          <Link to="/">
            <SvgInfo />
          </Link>
        </Router>
      </div>
      <div className={Styles.body}>
        <div className={Styles.header}>
          <Router>
            <Link to="/">{data.title}</Link>
            <Link to="/">ds</Link>
          </Router>
        </div>

        <div className={Styles.Footer}>
          <p className={Styles.textgray}>#{data.number}</p>
          <p className={Styles.textgray}>{data.state}</p>
          <p className={Styles.textgray}>{data.updated_at}</p>
          <p className={Styles.textgray}>by {data.user.login}</p>
        </div>
      </div>
      <div className={Styles.messages}>
        <Router>
          <Link to="/"></Link>
        </Router>
        <Router>
          <Link to="/">
            <SvgMessages />
          </Link>
          <span>{data.comments}</span>
        </Router>
      </div>
    </div>
  );
};

RowData.propTypes = {
  //data: PropTypes.array,
};

export default RowData;
