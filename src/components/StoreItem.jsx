import React, { useState } from "react";

const StoreItem = (props) => {
  let _id = props.product._id;
  let name = props.product.name;
  let description = props.product.description;
  let imagePath = props.product.imagePath;
  let price = props.product.price;
  let currency = props.product.currency;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [isInCartStatus, setIsInCartStatus] = useState(cart.filter((element) => { return element._id === _id }).length !== 0);


  const addToCart = () => {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...props.product, quantity: "1" });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="store__column">
      <div className="store__item item-store">
        <a className="item-store__image _ibg">
          <img src={imagePath} alt="item" />
        </a>
        <div className="item-store__content">
          <div className="item-store__name">{name}</div>
          <div className="item-store__description">{description}</div>
          <div className="item-store__price">
            {price} {currency}
          </div>

          <button
            onClick={() => {
              addToCart();
              setIsInCartStatus(true);
            }}
            disabled={isInCartStatus}
            className="item-store__addtocart"
          >
            До кошику
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
