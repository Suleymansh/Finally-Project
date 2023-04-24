import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const {t}=useTranslation();
  return (
    <>
      <div class="container">
        <div class="contact-box">
          <div class="left"></div>
          <div class="right">
            <h2>{t("contact.1")}</h2>
            <input type="text" class="field" placeholder={t("contact.2")} />
            <input type="text" class="field" placeholder={t("contact.3")} />
            <input type="text" class="field" placeholder={t("contact.4")} />
            <textarea placeholder={t("contact.5")} class="field"></textarea>
            <button class="btnsen">{t("contact.6")}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact