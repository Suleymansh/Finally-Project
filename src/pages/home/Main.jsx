import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t}=useTranslation();
  return (
    <>
      <section className="home" id="home">
        <div className="content ">
          <h3 className='new'>{t("main.1")}</h3>
          <span> {t("main.2")}</span>
          <p>{t("main.3")}</p>
          <Link to="/shop" className="btn">
            {t("main.4")}
          </Link>
        </div>
      </section>
    </>
  );
}

export default Main