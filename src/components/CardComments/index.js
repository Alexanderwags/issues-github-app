import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import Emotico from "../../assets/Svg/emotico";
import Grid from "@material-ui/core/Grid";

function CardComments(props) {
  let lec =
    "without seeing the full .log file its a bit of a stab in the dark  diagnoses' to what wrong.\r\n1. try \"CRA in other terminal other than VSCode...ie terminal(mac) commandProment/ (Win)\r\n2. Uninstall Node & reinstalling.\r\n\r\nThese would be my starting point";

  return (
    <Grid container={true} xs={12} className={Styles.center}>
      <Grid item={true} xs={12} sm={8}>
        <div className={Styles.card}>
          <div className={Styles.header}>
            <Link>"william"</Link>
            <Emotico />
          </div>
          <div className={Styles.body}>
            <pre>{lec}</pre>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default CardComments;
