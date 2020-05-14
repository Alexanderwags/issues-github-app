import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import Emotico from "../../assets/Svg/emotico";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import ReactMarkdown from "react-markdown";
import htmlParser from "react-markdown/plugins/html-parser";
import moment from "moment";
import ReactHtml from "react-markdown/with-html";
import "aos/dist/aos.css";
import AOS from "aos";
import MenuItem from "../MenuItem";

const parseHtml = htmlParser({
  isValidNode: (node) => node.type !== "script",
  processingInstructions: [
    /* ... */
  ],
});
function CardComments({ info }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <Grid container={true} className={Styles.center} data-aos="zoom-in">
      <Grid item={true} className={Styles.avatar} lg={1}>
        <Avatar
          alt="Cindy Baker"
          className={Styles.avatar}
          src={info.user.avatar_url}
        />
      </Grid>
      <Grid item={true} xs={12} lg={11} className={Styles.cen}>
        <div className={Styles.card}>
          <div className={Styles.header}>
            <div className={Styles.info}>
              <Link to="/comments">{info.user.login}</Link>
              <span>
                commented {moment(info.updated_at).startOf("day").fromNow()}
              </span>
            </div>
            <div className={Styles.config}>
              <Emotico />
              <MenuItem className={Styles.transform}></MenuItem>
            </div>
          </div>
          <div className={Styles.body}>
            <ReactMarkdown source={info.body} escapeHtml={false} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default CardComments;
