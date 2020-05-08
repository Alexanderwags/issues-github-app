import React, { useState } from "react";
import {
  BrowserRouter as Routerr,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Data from "../assets/dataText.json";
import Modal from "../components/Modal";
import "../Global/Styles.scss";

function Router() {
  const [owner, setowner] = useState("");
  const [repo, setrepo] = useState("");
  const [pagi, setpagi] = useState(0);
  function GetInfo(ow, rep) {
    console.log(owner, repo);
    setowner(ow);
    setrepo(rep);
    setpagi(Data.length / 10);
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
            render={(props) => (
              <h1>comentarios{console.log(props.location.state)}</h1>
            )}
          />
          <Route render={() => <h1>No encontrado</h1>} /> />
        </Switch>
      </Routerr>
    </>
  );
}

export default Router;
