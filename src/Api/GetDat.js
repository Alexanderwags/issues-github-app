import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function GetDat({ data }) {
  const [info, setInfo] = useState([]);
  info.push("hola");
  return (
    <div>
      <h1>{data.user.login}</h1>
      <Router key={data.id}>
        <Link to="/">{data.title}</Link>

        <Link to="/">{data.title}</Link>

        <Link to="/">{data.comments}</Link>
      </Router>
    </div>
  );
}

export default GetDat;
