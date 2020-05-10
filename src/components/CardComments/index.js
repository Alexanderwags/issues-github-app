import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import Emotico from "../../assets/Svg/emotico";
import Grid from "@material-ui/core/Grid";
import ReactMarkdown from "react-markdown";
import htmlParser from "react-markdown/plugins/html-parser";
import ReactHtml from "react-markdown/with-html";
const parseHtml = htmlParser({
  isValidNode: (node) => node.type !== "script",
  processingInstructions: [
    /* ... */
  ],
});
function CardComments({ info }) {
  return (
    <Grid container={true} className={Styles.center}>
      <Grid item={true} xs={12} lg={8}>
        <div className={Styles.card}>
          <div className={Styles.header}>
            <Link to="/comments">{info.user.login}</Link>
            <span>commented {info.updated_at}</span>
            <Emotico />
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
