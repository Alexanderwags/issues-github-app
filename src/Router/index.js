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
  const [img, setimg] = useState("");
  const [inf, setinf] = GetData(owner, repo, band);

  try {
    if (inf.length > 0 && band) {
      setimg(inf[0].repository_url);
      setpagi(inf.length / 10);
      setband(false);
      console.log(img);
      // console.log(inf);
    }
  } catch {}
  function GetInfo(ow, rep) {
    setowner(ow);
    setrepo(rep);
    setband(true);
  }
  return (
    <>
      <Modal GetInfo={GetInfo} />
      <Header img={img} enc={band} />

      <Routerr>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home Data={inf} pagi={pagi} />}
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
