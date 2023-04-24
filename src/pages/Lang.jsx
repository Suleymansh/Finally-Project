
import React from "react";
import { useTranslation } from "react-i18next";
import "../common/i18n/i18next";


const Lang = () => {
  const {  i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="lang d-flex lang">
        <button
          className="btnaz "
          onClick={() => {
            handleClick("az");
          }}
        >
         AZ
        </button>
        <button
          className="btnen "
          onClick={() => {
            handleClick("en");
          }}
        >
          EN
        
        </button>
      </div>
    </>
  );
};

export default Lang;