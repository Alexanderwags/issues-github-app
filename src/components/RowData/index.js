import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import SvgInfo from "../../assets/Svg/info";
import SvgMessages from "../../assets/Svg/messages";
import "aos/dist/aos.css";
import AOS from "aos";
const RowData = ({ data }) => {
  const [bande, setbande] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  function showtitle() {
    if (data.comments === 0) {
      return (
        <>
          <Link
            to={{
              pathname: "/comments",
              state: {
                detail: data.comments_url,
                url: data.url,
              },
            }}
          >
            {data.title}
          </Link>
        </>
      );
    } else if (data.comments > 0) {
      return (
        <Link
          to={{
            pathname: "/comments",
            state: {
              detail: data.comments_url,
              url: data.url,
            },
          }}
        >
          {data.title}
        </Link>
      );
    }
  }
  function showMessages() {
    if (data.comments === 0) {
      return <></>;
    } else {
      return (
        <>
          <Link to="/comments"></Link>

          <Link
            to={{
              pathname: "/comments",
              state: { detail: data.comments_url, url: data.url },
            }}
          >
            <SvgMessages />
          </Link>
          <span>{data.comments}</span>
        </>
      );
    }
  }
  return (
    <div className={Styles.rowdata}>
      <div className={Styles.infor}>
        <Link to="/">
          <SvgInfo />
        </Link>
      </div>
      <div className={Styles.body}>
        <div className={Styles.header}>
          {showtitle()}
          {data.labels.map((inf) => (
            <Link
              to="/"
              key={inf.id}
              className={Styles.label}
              style={{ backgroundColor: `#${inf.color}` }}
            >
              {inf.name}
            </Link>
          ))}
        </div>

        <div className={Styles.Footer}>
          <p className={Styles.textgray}>#{data.number}</p>
          <p className={Styles.textgray}>{data.state}</p>
          <p className={Styles.textgray}>{data.updated_at}</p>
          <p className={Styles.textgray}>by {data.user.login}</p>
        </div>
      </div>
      <div className={Styles.messages}>{showMessages()}</div>
    </div>
  );
};

RowData.propTypes = {
  //data: PropTypes.array,
};

export default RowData;
