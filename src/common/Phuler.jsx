import React from "react";
import { useTranslation } from "react-i18next";


// import sliderdata from  "../assets/data/sliderdata";
// import sliderdata  from "../assets/data/sliderdata";
import sliderdata from "../data/sliderdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Phuler = () => {
     const { t }   = useTranslation();
   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 2,
     autoplay: true,
     speed: 2000,
     autoplaySpeed: 2000,
     cssEase: "linear",
   };
  return (
    <>
      <section className="div ">
        <h4 className="trend"> {t("phuler.1")}</h4>

        <h3 className="customs">{t("phuler.2")}</h3>
        <Slider {...settings} className="container">
          {sliderdata.map((value, index) => (
            <div className="my-5 " key={index}>
              <img width={150} className=" m-auto" src={value.img} alt="err" />
              <h5 className="nam">{value.name}</h5>

            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Phuler;

 
