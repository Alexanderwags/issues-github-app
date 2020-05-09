import React, { useState } from "react";
import TableData from "../components/TableData";
import RowData from "../components/RowData";
import Pagination from "@material-ui/lab/Pagination";
import Styles from "./styles/Home/Styles.module.scss";
const Home = ({ Data, pagi = 2 }) => {
  const [page, setPage] = useState(1);

  let pages = Data.map((inf) => {
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
  return (
    <div>
      <TableData>{section(page)}</TableData>

      <Pagination
        count={pagi}
        page={page}
        onChange={handleChange}
        color="primary"
        className={Styles.pagin}
      />
    </div>
  );
};
//https://api.github.com/repos/alexanderwags/web_personal/issues
//GET / repos /: owner /: repo / issues
// {Data.map((inf) => {
//   return <RowData data={inf} key={inf.id} />;
// })}
export default Home;
