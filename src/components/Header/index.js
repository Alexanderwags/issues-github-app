import React, { useState, useEffect } from "react";
import Styles from "./styles/Styles.module.scss";
import { GetComments } from "../../Api/GetData";
import "aos/dist/aos.css";
import AOS from "aos";
import Figure from "../../assets/Svg/Figure";
import ImgGit from "../../assets/Octocat.jpg";
function Header(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const [band, setband] = useState(false);
  const [text, settext] = useState("");
  const [name, setname] = useState("");
  const [img, setimg] = useState("");
  const [inf, setinf] = GetComments(props.img, band);
  const [enc, setenc] = useState(false);
  try {
    if (Object.entries(inf).length === 0 && band === false) {
      setband(true);
    } else if (Object.entries(inf).length > 0 && band) {
      setimg(inf.owner.avatar_url);
      settext(inf.owner.login);
      setname(inf.name);
      setenc(true);
      setband(false);
    }
  } catch (error) {}

  return (
    <div className={Styles.header}>
      {enc === false ? (
        <>
          <h1 data-aos="fade-left">Git Hub Issues</h1>
          <img
            src={ImgGit}
            alt="header"
            className={Styles.img1}
            data-aos="fade-right"
          />
        </>
      ) : (
        <>
          <div className={Styles.title}>
            <h1>{text}</h1> / <h2>{name}</h2>
          </div>
          <img
            src={img}
            alt="header"
            className={Styles.img}
            data-aos="fade-right"
          />
        </>
      )}
    </div>
  );
}

export default Header;
