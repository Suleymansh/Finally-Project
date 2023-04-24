
import React from 'react'
import { useTranslation } from 'react-i18next';

const Review = () => {
  const {t}=useTranslation();
  return (
    <>
      <div className="testimonialas">
        <div className="inner">
          <h1> {t("about.5")} </h1>
          <div className="border"> </div>

          <div className="row">
            <div className="col">
              <div className="testimonial">
                <img
                  src=" https://cdn.shopify.com/s/files/1/0021/5570/8489/files/team-1_large.jpg?v=1613740207"
                  alt="err"
                />
                <div className="name">Mr.Mike Banding</div>
                <div className="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p>{t("about.6")} </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img
                  src="https://cdn.shopify.com/s/files/1/0021/5570/8489/files/team-3_large.jpg?v=1613740207"
                  alt="err"
                />
                <div className="name">Ms.Sophia</div>
                <div className="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>{t("about.7")} </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img
                  src="https://cdn.shopify.com/s/files/1/0021/5570/8489/files/team-4_large.jpg?v=1613740207"
                  alt="err"/>
                <div className="name"> Mr.John Lee</div>
                <div className="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p>{t("about.8")} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review
