import React from "react";
import TableData from "../components/TableData";
import RowData from "../components/RowData";
import GetData from "../Api/GetData";
import Data from "../assets/dataText.json";

const Home = () => {
  return (
    <div>
      <TableData>
        <RowData />
      </TableData>
      {Data.map((inf) => {
        return <GetData data={inf} />;
      })}
    </div>
  );
};
//https://api.github.com/repos/alexanderwags/web_personal/issues
//GET / repos /: owner /: repo / issues

export default Home;
