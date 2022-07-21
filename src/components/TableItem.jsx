import React, { useState } from "react";

const TableItem = (props) => {
  const [quantity, setQuantity] = useState(props.product.quantity);

  let _id = props.product._id;
  let name = props.product.name;
  let description = props.product.description;
  let imagePath = props.product.imagePath;
  let price = props.product.price;
  let currency = props.product.currency;

  return (
    <tr className="body-table-cart__row">
      <td className="body-table-cart__item">
        <img src={imagePath} alt="item"></img>
        <span>
          {name} <button className="del" onClick={props.deleteFromCart} id={_id}></button>
        </span>
      </td>
      <td className="body-table-cart__item">{description}</td>
      <td className="body-table-cart__item"><input type="number" min={1} max={10} value={quantity} onChange={(event) => {
        let newCart = props.cart.map((element) => {
          if (element._id === _id) {
            element.quantity = event.target.value;
          }
          return element;
        });
        localStorage.setItem("cart", JSON.stringify(newCart));
        props.setCart(newCart);
        setQuantity(event.target.value);
      }
      } /></td>
      <td className="body-table-cart__item">
        {price} {currency}
      </td>
    </tr>
  );
};

export default TableItem;
