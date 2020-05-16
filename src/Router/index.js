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
import "./styles/styles.scss";
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
  // try {
  //   console.log(setinf);
  //   if (inf.length > 0 && band) {
  //     setimg(inf[0].repository_url);
  //     setpagi(inf.length / 10);
  //     if (cont === 0) {
  //       setband(false);
  //     }
  //     // if (cont > 0) {
  //     //   if (aux[0].url !== inf[0].url) {
  //     //     setband(false);
  //     //     console.log("1");
  //     //   } else if (aux[0].url === inf[0].url) {
  //     //     setband(true);
  //     //     console.log("2");
  //     //   }
  //     //   if (cont === 10) {
  //     //     // setband(false);
  //     //     console.log("no puede ser ");
  //     //     setcont(0);
  //     //   }
  //     // }
  //     if (setinf) {
  //       setband(false);
  //     }
  //     setcont(cont + 1);

  //     //setband(false);
  //     //console.log(img);
  //     //console.log("info ", inf);
  //   }
  //   if (inf.length === 0) {
  //     //   console.log("verificacion ", inf);
  //   }
  // } catch {}
  // try {
  //   if (inf.length > 0 && band) {
  //     setimg(inf[0].repository_url);
  //     setpagi(inf.length / 10);
  //     setband(false);
  //   }
  // } catch {}

  function GetInfo(ow, rep, info) {
    setowner(ow);
    setrepo(rep);
    //setaux(inf);
    setband(true);
    setinf(info);
    setimg(info[0].repository_url);
    setpagi(info.length / 10);
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
                  <Modal GetInfo={GetInfo} />
                  {check()}
                  {/* <Home Data={inf} pagi={pagi} />; */}
                </div>
              );
            }}
          />
          <Route
            exact
            path="/comments"
            render={(props) => (
              <div className="comments">
                <Figure className="fig" />
                <Comments api={props.location.state} />
              </div>
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
