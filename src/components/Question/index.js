import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Grid from "@material-ui/core/Grid";
import Emotico from "../../assets/Svg/emotico";
import { Link } from "react-router-dom";
import "./styles/estilos.scss";
import Styles from "./styles/Styles.module.scss";
import Avatar from "@material-ui/core/Avatar";
import "aos/dist/aos.css";
import AOS from "aos";
function Question({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <Grid container={true} className={Styles.center} data-aos="zoom-in">
      <Grid item={true} xs={1}>
        <Avatar
          alt="Cindy Baker"
          className={Styles.avatar}
          src={data.user.avatar_url}
        />
      </Grid>
      <Grid item={true} xs={12} lg={11}>
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
