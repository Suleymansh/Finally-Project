import React from 'react'
import { useTranslation } from 'react-i18next';
import video1 from '../assets/img/about-vid.mp4'
import Review from './Review';

const About = () => {
  const {t}=useTranslation();
  return (
    <>
     <div className="section">
        <h1 className="heading">{t("about.1")}</h1>
       <div className="wrapper">
          <div className="lefts">
            <video width={500} src={video1} loop autoPlay muted></video>
          </div>        
          <div className="rights">
            <h4> {t("about.3")}</h4>
         
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
      <Review />
    </>
  );
}

export default About
