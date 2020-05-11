import React from "react";
import Styles from "./styles/Styles.module.scss";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Aside() {
  const classes = useStyles();

  return (
    <div className={Styles.container}>
      <div className={Styles.assignees}>
        <h3>Assignees</h3>
      </div>
      <div className={Styles.labels}>
        <h3>Labels</h3>
      </div>
      <div className={Styles.projects}>
        <h3>Projects</h3>
      </div>
      <div className={Styles.milestone}>
        <h3>Milestone</h3>
      </div>
      <div className={Styles.linked}>
        <h3>Linked pull requests</h3>
      </div>
      <div className={Styles.notifications}>
        <div className={Styles.header}>
          <Link to="/">Notifications</Link>
          <Link to="/">Customize</Link>
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#2cbe4e", color: "white" }}
          className={classes.button}
          startIcon={<VolumeUpIcon />}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default Aside;
