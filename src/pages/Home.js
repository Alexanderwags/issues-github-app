import React from "react";
import TableData from "../components/TableData";
import RowData from "../components/RowData";
import GetDat from "../Api/GetDat";
import Data from "../assets/dataText.json";

const Home = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <TableData>
        {Data.map((inf) => {
          return <RowData data={inf} key={inf.id} />;
        })}
      </TableData>
    </div>
  );
};
//https://api.github.com/repos/alexanderwags/web_personal/issues
//GET / repos /: owner /: repo / issues

export default Home;
