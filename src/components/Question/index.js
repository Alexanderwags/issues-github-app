import React from "react";
import ReactMarkdown from "react-markdown";
import Grid from "@material-ui/core/Grid";
import Emotico from "../../assets/Svg/emotico";
import { Link } from "react-router-dom";
import "./styles/estilos.scss";
import Styles from "./styles/Styles.module.scss";
import Avatar from "@material-ui/core/Avatar";

function Question({ data }) {
  return (
    <Grid container={true} className={Styles.center}>
      <Grid item={true} xs={12} lg={4}>
        <Avatar alt="Cindy Baker" src={data.user.avatar_url} />
      </Grid>
      <Grid item={true} xs={12} lg={8}>
        <div className={Styles.card}>
          <div className={Styles.header}>
            <Link to="/comments">{data.user.login}</Link>
            <span>commented {data.updated_at}</span>
            <Emotico />
          </div>
          <div className={Styles.body}>
            <ReactMarkdown source={data.body} escapeHtml={false} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Question;
