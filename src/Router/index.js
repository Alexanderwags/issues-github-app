import React from "react";
import { BrowserRouter as Routerr, Switch, Link } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Data from "../assets/dataText.json";
import Modal from "../components/Modal";
import "../Global/Styles.scss";

function Router() {
  return (
    <>
      <Modal />
      <Header />
      <Home />
    </>
  );
}

export default Router;
