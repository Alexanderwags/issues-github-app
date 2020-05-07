import React, { useState } from "react";

const GetData = ({ Data }) => {
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [messages, setMessages] = useState("");
  const [number, setNumber] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState("");

  function GetDataBody(Data) {
    return Data.map((inf) => {
      setTitle(inf.title);
      setLabel("");
      setMessages(inf.comments);
      setNumber(inf.number);
      setUser(inf.user.login);
      setDate(inf.labels.updated_at);
      setState(inf.state);
      return [title, label, messages, number, user, date, state];
    });
  }

  return (
    <>
      <h1>{console.log(GetDataBody(Data))}</h1>
    </>
  );
};

export default GetData;
