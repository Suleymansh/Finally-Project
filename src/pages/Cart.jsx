import React from "react";
import { useCart } from "react-use-cart";
import img from "../assets/img/empty.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();

  const getName = localStorage.getItem("nameData");
  const getPass = localStorage.getItem("passData");
  const aa = ( ) => {
    if (getName === null && getPass === null) {
      Swal.fire("Login Please");
      navigate("/login");
    } else {
      navigate("/shop");
      emptyCart();
      Swal.fire("Good job!", "You clicked the button!", "success");
    }
     
  };

  const {
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    isEmpty,
    cartTotal,
  } = useCart();
  if (isEmpty) return;
  <div className="d-flex align-items center justify-content-center">
    <img src={img} alt="err" />
  </div>;


  return (
    <>
      <div className="container">
        <div className="box-cart">
          <table className="table  table-danger">
            <thead>
              <tr>
                {/* <th scope="col"></th> */}
                <th scope="col">photo</th>
                <th scope="col">title</th>
                <th scope="col">price</th>
                <th scope="col">quantity</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>

            <tbody>
              {items.map((value, i) => {
                return (
                  <tr>
                    {/* <th scope="row">{i + 1}</th> */}
                    <td>
                      <img width={50} src={value.img} alt={value.title} />
                    </td>
                    <td>{value.title}</td>
                    <td>{value.price}</td>
                    {/* <td>{(value.price * value.quantity).toFixed(1)}$</td> */}
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          updateItemQuantity(value.id, value.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="mx-3">{value.quantity}</span>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          updateItemQuantity(value.id, value.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn  btn-danger"
                        onClick={() => removeItem(value.id)}
                      >
                        Del
                        <i class="bi bi-archive"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="">
        Total Price:
        {cartTotal.toFixed(1)}$
      </h3>
      <div className="div d-flex  align-items-center flex-column ">
        <button
          className=" btn btn-danger  "
          onClick={() => {
            emptyCart();
          }}
        >
          Empty Cart
        </button>
        <button onClick={aa} className="buy mt-2 ">
          
          buy
        </button>
      </div>
    </>
  );
};

export default Cart;


