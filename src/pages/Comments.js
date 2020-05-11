import React, { useState } from "react";
import { GetComments } from "../Api/GetData";
import Card from "../components/CardComments";
import Styles from "./styles/Comments/Styles.module.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import Question from "../components/Question";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Comments(props) {
  const classes = useStyles();

  const [band, setband] = useState(false);
  const [enc, setenc] = useState(false);
  const [inf, setinf] = GetComments(props.api.detail, band);
  const [inf2, setinf2] = GetComments(props.api.url, band);
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
    }
  } catch (error) {}
  return (
    <div className={Styles.groupCard}>
      {enc === false ? (
        <CircularProgress disableShrink />
      ) : (
        <>
          <div className={Styles.header}>
            <h1 className={Styles.title}>
              {inf2.title}#<span>{inf2.number}</span>
            </h1>
            <div className={Styles.body}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<InfoIcon />}
                value="open"
              />
              <p>
                {inf2.user.login}
                opened this issue
                {inf2.updated_at}
                {inf.length}comments
              </p>
            </div>
          </div>

          <Question data={inf2} />

          {inf.map((info) => (
            <Card info={info} key={info.id} />
          ))}
        </>
      )}
    </div>
  );
}

export default Comments;
