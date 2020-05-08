import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import SvgInfo from "../../assets/Svg/info";
import SvgMessages from "../../assets/Svg/messages";

const RowData = ({ data }) => {
  return (
    <div className={Styles.rowdata}>
      <div className={Styles.infor}>
        <Link to="/">
          <SvgInfo />
        </Link>
      </div>
      <div className={Styles.body}>
        <div className={Styles.header}>
          <Link to="/">{data.title}</Link>
          <Link to="/">ds</Link>
        </div>

        <div className={Styles.Footer}>
          <p className={Styles.textgray}>#{data.number}</p>
          <p className={Styles.textgray}>{data.state}</p>
          <p className={Styles.textgray}>{data.updated_at}</p>
          <p className={Styles.textgray}>by {data.user.login}</p>
        </div>
      </div>
      <div className={Styles.messages}>
        <Link to="/comments">test</Link>

        <Link
          to={{
            pathname: "/comments",
            state: { detail: data.comments_url },
          }}
        >
          <SvgMessages />
        </Link>
        <span>{data.comments}</span>
      </div>
    </div>
  );
};

RowData.propTypes = {
  //data: PropTypes.array,
};

export default RowData;
