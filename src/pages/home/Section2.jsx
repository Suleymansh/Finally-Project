
import React, { useEffect } from 'react'
import img from '../../assets/img/soon1.webp'
import img1 from "../../assets/img/soon2.webp";
import img2 from "../../assets/img/soon3.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Section2 = () => {
  const {t}=useTranslation();
  useEffect(()=>{
    AOS.init({ duration: 2000 });
  },[] );
  return (
    <>
      <div className="line"> {t("section.1")}</div>
      <div className="conatiner d-flex align-items-center justify-content-center my-3 flex-wrap ">
        <div className="sec  " data-aos="zoom-in">
          <img width={250} src={img} alt="err" />
          <h3 className=""> {t("section.2")}</h3>
        </div>
        <div className="sec " data-aos="zoom-in">
          <img width={250} src={img1} alt="err" />
          <h3 className=""> {t("section.2")}</h3>
        </div>
        <div className="sec " data-aos="zoom-in">
          <img width={250} src={img2} alt="err" />
          <h3 className=""> {t("section.2")}</h3>
        </div>
      </div>
      <Link to="/shop" className="next">
        {t("section.3")}
      </Link>
    </>
  );
}

export default Section2