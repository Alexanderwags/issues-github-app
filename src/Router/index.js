import React from "react";
import { BrowserRouter as Routerr, Switch, Link } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Data from "../assets/dataText.json";
import Modal from "../components/Modal";
import "../Global/Styles.scss";

function Router() {
  function GetInfo(owner, repo) {
    console.log(owner, repo);
  }
  return (
    <>
      <Modal GetInfo={GetInfo} />
      <Header />
      <Home />
    </>
  );
}

export default Router;
