import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { FormControl, Button } from "@material-ui/core";
import "./styles/Styles.scss";
import PropTypes from "prop-types";
import "aos/dist/aos.css";
import AOS from "aos";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ GetInfo }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [repo, setRepo] = useState("");
  const [owner, setOwner] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      GetInfo(owner, repo);
    } catch (e) {
      console.log(e);
    }
  };

  function onChangeOwner(e) {
    setOwner(e.target.value);
  }
  function onChangeRepo(e) {
    setRepo(e.target.value);
  }
  const body = (
    <div className="search" data-aos="zoom-in">
      <h1> Github Issues</h1>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="form-search"
      >
        <FormControl>
          <TextField
            required
            id="standard-required"
            label="Enter Owner"
            value={owner}
            onChange={onChangeOwner}
            placeholder="Enter a Owner  "
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            id="standard-required"
            label="Enter Repo"
            value={repo}
            onChange={onChangeRepo}
            placeholder="Enter Repo"
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          style={{ background: "white", color: "#499bea" }}
        >
          Search
        </Button>
      </form>
    </div>
  );

  return (
    <div className="pre-load">
      <button type="button" onClick={handleOpen}>
        Search
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="pre"
      >
        {body}
      </Modal>
    </div>
  );
}
SimpleModal.propTypes = {
  GetInfo: PropTypes.func.isRequired,
};
