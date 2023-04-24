import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useAppContext } from "./context/appContext";
import emptywishlist from "../assets/img/emptyfavori.webp";

const Favorites = () => {
  const { addItem } = useCart();
  // ----vishlist

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log("favorites are", favorites);
  const favoritesChecker = (id) => {
    const boolean = favorites.some((value) => value.id === id);
    return boolean;
  };

  return (
    <>
      <div className="container my-5  ">
        <div className="row gap-5 d-flex ">
          {favorites.length > 0 ? (
         favorites.map((value) => {
              const { img, title, price } = value;

              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Button
                      className="add"
                      variant="primary"
                      onClick={() => addItem(value)}
                    >
                      <i class="fa-solid fa-cart-favoritesping"></i> Add to cart
                    </Button>

                    {favoritesChecker(value.id) ? (
                      <button
                        className="heartwhite"
                        onClick={() => removeFromFavorites(value.id)}
                      >
                        <i class="fa-solid fa-heart-crack"></i>
                      </button>
                    ) : (
                      <button
                        onClick={() => addToFavorites(value)}
                        className="heart"
                      >
                        <i class="fa-solid fa-heart"></i>
                      </button>)}
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <div className="text-center">
              <img src={emptywishlist} alt="favorites" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
