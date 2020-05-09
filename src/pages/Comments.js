import React from "react";
import { GetComments } from "../Api/GetData";
import Card from "../components/CardComments";
import Styles from "./styles/Comments/Styles.module.scss";
function Comments(props) {
  const [inf, setinf] = GetComments(props.api);
  return (
    <div className={Styles.groupCard}>
      <Card />
    </div>
  );
}

export default Comments;
