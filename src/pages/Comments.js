import React, { useState } from "react";
import { GetComments } from "../Api/GetData";
import Card from "../components/CardComments";
import Styles from "./styles/Comments/Styles.module.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Question from "../components/Question";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import moment from "moment";
import Aside from "../components/Aside";

const estilos = {
  button: {
    display: "flex",
    padding: "4px 8px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    backgroundColor: "#2cbe4e",
    borderRadius: "3px",
  },
};

function Comments(props) {
  const [band, setband] = useState(false);
  const [enc, setenc] = useState(false);
  const [inf, setinf] = GetComments(props.api.detail, band);
  const [inf2, setinf2] = GetComments(props.api.url, band);
  let date = "";
  try {
    if (
      Object.entries(inf).length === 0 &&
      Object.entries(inf2).length === 0 &&
      band === false
    ) {
      console.log("comments");
      setband(true);
    } else if (
      Object.entries(inf).length > 0 &&
      Object.entries(inf2).length > 0 &&
      band
    ) {
      console.log("si hay comments");
      setband(false);
      setenc(true);
      date = moment(inf2.updated_at).format("dddd");
    }
  } catch (error) {}

  return (
    <div className={Styles.groupCard}>
      {enc === false ? (
        <CircularProgress disableShrink />
      ) : (
        <>
          <Grid container={true} className={Styles.center}>
            <Grid item={true} xs={12} lg={9}>
              <div className={Styles.header}>
                <h1 className={Styles.title}>
                  {inf2.title}#<span>{inf2.number}</span>
                </h1>
                <div className={Styles.body}>
                  <Button
                    variant="contained"
                    style={estilos.button}
                    className={Styles.button}
                    startIcon={<InfoIcon />}
                  >
                    open
                  </Button>
                  <p>
                    <span>{inf2.user.login}</span>
                    <span>opened this issue</span>
                    <span>
                      {moment(inf2.updated_at).startOf("day").fromNow()}
                    </span>
                    <span>{inf.length}comments</span>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container={true} xs={12} lg={9}>
            <Grid container={true} xs={10} spacing={1}>
              <Question data={inf2} />
              {inf.map((info) => (
                <Card info={info} key={info.id} />
              ))}
            </Grid>

            <Grid item={true} xs={2} spacing={1}>
              <Aside data={inf2} />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default Comments;
