import React, { useState, useEffect } from "react";
import TableData from "../components/TableData";
import RowData from "../components/RowData";
import Pagination from "@material-ui/lab/Pagination";
import Styles from "./styles/Home/Styles.module.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import Modal from "../components/Modal";
import { GetData } from "../Api/GetData.js";

const Home = () => {
  const [owner, setowner] = useState("");
  const [repo, setrepo] = useState("");
  const [band, setband] = useState(false);
  const [enc, setenc] = useState(false);
  const [inf, succes] = GetData(owner, repo, band);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    if (enc === false) {
      GetInfo(owner, repo, band);
      setband(true);
    }
  });
  const [page, setPage] = useState(1);
  let pages = inf.map((inf) => {
    return <RowData data={inf} key={inf.id} />;
  });
  const handleChange = (event, value) => {
    setPage(value);
  };
  function section(page) {
    let aux = page * 10 - 10;
    let cont = 0;
    let array = [];
    for (let i = aux; i < pages.length; i++) {
      if (cont < 10) {
        array.push(pages[i]);
      }
      cont++;
    }
    return array;
  }
  function GetInfo(ow, rep, bande) {
    setowner(ow);
    setrepo(rep);
    setband(bande);
    console.log("owner : ", owner);
  }
  return (
    <div className={Styles.home}>
      <Modal GetInfo={GetInfo} />
    </div>
  );
};
//https://api.github.com/repos/alexanderwags/web_personal/issues
//GET / repos /: owner /: repo / issues
// {Data.map((inf) => {
//   return <RowData data={inf} key={inf.id} />;
// })}
export default Home;

// const [page, setPage] = useState(1);
// let pages = Data.map((inf) => {
//   return <RowData data={inf} key={inf.id} />;
// });
// const handleChange = (event, value) => {
//   setPage(value);
// };
// function section(page) {
//   let aux = page * 10 - 10;
//   let cont = 0;
//   let array = [];
//   for (let i = aux; i < pages.length; i++) {
//     if (cont < 10) {
//       array.push(pages[i]);
//     }
//     cont++;
//   }
//   return array;
// }

{
  /* <TableData data-aos="fade-up">{section(page)}</TableData>
  
  <Pagination
  count={pagi}
    page={page}
    onChange={handleChange}
    color="primary"
    className={Styles.pagin}
    data-aos="zoom-in"
  /> */
}
