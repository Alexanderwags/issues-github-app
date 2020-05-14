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
  const [img, setimg] = useState("");
  const [inf, setinf] = GetComments(props.img, band);
  const [enc, setenc] = useState(false);
  try {
    if (Object.entries(inf).length === 0 && band === false) {
      console.log("vacia imagen");
      setband(true);
    } else if (Object.entries(inf).length > 0 && band) {
      console.log("hay imagen");
      setimg(inf.owner.avatar_url);
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
