import React, { useState } from "react";
import { BrowserRouter as Routerr, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import Data from "../assets/dataText.json";
import Modal from "../components/Modal";
import { GetData } from "../Api/GetData";
import "../Global/Styles.scss";

function Router() {
  const [owner, setowner] = useState("");
  const [repo, setrepo] = useState("");
  const [pagi, setpagi] = useState(0);
  const [band, setband] = useState(false);
  const [inf, setinf] = GetData(owner, repo, band);
  function GetInfo(ow, rep) {
    console.log(owner, repo);
    setowner(ow);
    setrepo(rep);
    setband(true);
    try {
      setpagi(Data.length / 10);
      console.log(inf);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Modal GetInfo={GetInfo} />
      <Header />

      <Routerr>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home Data={Data} pagi={pagi} />}
          />
          <Route
            exact
            path="/comments"
            render={(props) => <Comments api={props.location.state} />}
          />
          <Route render={() => <h1>No encontrado</h1>} /> />
        </Switch>
      </Routerr>
    </>
  );
}

export default Router;
