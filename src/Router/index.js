import React, { useState } from "react";
import { BrowserRouter as Routerr, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import Data from "../assets/dataText.json";
import Modal from "../components/Modal";
import { GetData } from "../Api/GetData";
import "../Global/Styles.scss";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Figure from "../assets/Svg/Figure";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Router() {
  const [owner, setowner] = useState("");
  const [repo, setrepo] = useState("");
  const [pagi, setpagi] = useState(0);
  const [band, setband] = useState(false);
  const [img, setimg] = useState("");
  //const [inf, setinf] = GetData(owner, repo, band);
  const [aux, setaux] = useState([]);
  const [cont, setcont] = useState(0);
  const classes = useStyles();
  const [inf, setinf] = useState([]);

  function GetInfo(ow, rep, info) {
    // setowner(ow);
    // setimg(info[0].repository
    // setrepo(rep);
    // //setaux(inf);
    // setband(true);
    // setinf(info);_url);
    // setpagi(info.length / 10);
  }
  function check() {
    if (inf.message === "Not Found") {
      return (
        <Alert severity="warning">
          you entered a wrong repository please check
        </Alert>
      );
    } else if (inf.length === 0) {
      return <></>;
    } else {
      return <Home Data={inf} pagi={pagi} />;
    }
  }
  return (
    <>
      <Header img={img} enc={band} />
      <Routerr>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              //console.log("de pana entro con que valor ? ", inf);
              return (
                <div className="comments">
                  <Home Data={inf} pagi={pagi} />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/comments"
            render={(props) => (
              <>
                <Comments api={props.location.state} />
              </>
            )}
          />
          <Route render={() => <h1>No encontrado</h1>} /> />
        </Switch>
      </Routerr>
      <Footer />
    </>
  );
}

export default Router;
// if (inf.message === "Not Found") {
//   setband(false);
//   return (
//     <Alert severity="warning">
//       This is a warning alert — check it out!
//     </Alert>
//   );
// } else if (inf.length === 0) {
//   setband(false);
//   return (
//     <div className={classes.root}>
//       <Alert severity="warning">vuelve a ingresar</Alert>
//     </div>
//   );
// } else {}
