import { useState, useEffect } from "react";

export function GetData(owner, repo, band) {
  const [data, setData] = useState([]);
  const [enc, setEnc] = useState(false);

  const API = `https://api.github.com/repos/${owner}/${repo}/issues`;

  useEffect(() => {
    async function Data() {
      try {
        const response = await fetch(API);

        setData(await response.json());
        //console.log(data);
        setEnc(true);
      } catch (error) {
        setEnc(false);
        console.log("null");
      }
    }
    band ? Data() : setEnc(false);
  }, [API, band, owner, repo, data]);
  return [data, enc];
}
export function GetComments(API, band) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function Data() {
      try {
        const response = await fetch(API);

        setData(await response.json());
        // console.log(data);
      } catch (error) {
        console.log("null");
      }
    }
    band ? Data() : console.log("");
  }, [API, band, data]);
  return [data, band];
}
export function loadmessages(datacountrie) {
  let grad = datacountrie.main.temp - 273.15;
  grad.toFixed(1);
  let wheater = [
    {
      grad: grad,
      desc: datacountrie.weather[0].description,
      hum: datacountrie.main.humidity,
      wind: datacountrie.wind.speed,
    },
  ];
  return wheater;
}
