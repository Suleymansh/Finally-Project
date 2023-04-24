

import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import data3 from "../data/data3";
import { useAppContext } from "./context/appContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Shop = () => {
  const {t}=useTranslation();
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  const { addItem } = useCart();
  const [data, setData] = useState(data3);
  // const notify = () => toast("Add to card!");
  // ----vishlist
  // search
  const [search, setSearch] = useState("");

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log("favorites are", favorites);
  const favoritesChecker = (id) => {
    const boolean = favorites.some((value) => value.id === id);
    return boolean;
  };

  return (
    <>
      <div className="container   ">
        <div className="row  d-flex  gap-2 align-items-center justify-content-around ">
          <form className=" mx-5" role="search">
            <input
              className="form-control me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder={t("search.2")}
              aria-label="Search"
            />
          </form>

          {data3.filter((value) => {
              return search.toLocaleLowerCase() === ""
                ? value
                : value.name.toLocaleLowerCase().includes(search);
            })
            .map((value, index) => {
              const { img, price, name } = value;

              return (
                <Card style={{ width: "15rem" }} data-aos="fade-down">
                  <Card.Img variant="top" className="arx" src={img} />
                  <Card.Body>
                    {/* <Card.Title>{title}</Card.Title> */}
                    <Card.Title className="name">{name}</Card.Title>
                    <div className="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>

                    <Card.Text>${price}</Card.Text>
                    <Button
                      className="add"
                      variant="primary"
                      onClick={() =>addItem(value)}
                    >
                      <i class="fa-solid fa-cart-shopping"></i> {t("search.1")}
                    </Button>

                    {favoritesChecker(value.id) ? (
                      <button
                        className="heartwhite"
                        onClick={() => removeFromFavorites(value.id)} >
                        <i class="fa-solid fa-heart-crack"></i>
                        
                      </button>
                    ) : (
                      <button
                        className="heart"
                        onClick={() => addToFavorites(value)}
                      >
                        <i class="fa-solid fa-heart"></i>
                      </button>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Shop;
