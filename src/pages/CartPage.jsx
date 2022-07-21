import React, { useState } from "react";
import CartBuyForm from "../components/CartBuyForm";
import TableItem from "../components/TableItem";

import "./CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [orderStatus, setOrderStatus] = useState(false);

  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };

  let resultPrice = 0;

  cart.map((product) => {
    resultPrice += parseInt(parseInt(product.price) * parseInt(product.quantity));
  });


  const deleteFromCart = (event) => {
    const newCart = cart.filter((element) => { return element._id !== event.target.id });
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <section className="main__cart cart">
      <div className="cart__container">
        <div className="cart__header header-block">
          <h1 className="header-block__title">Кошик</h1>
          <div className="header-block__subtitle">Ваші обрані товари</div>
        </div>
        {cart.length > 0 ? (
          <CartPageBody cart={cart} clearCart={clearCart} setOrderStatus={setOrderStatus} resultPrice={resultPrice} deleteFromCart={deleteFromCart} setCart={setCart} />
        ) : (
          <div>
            <div className="cart__empty">Кошик порожній. <br /> Оберіть товари на головній сторінці.</div>
            {orderStatus ? <div className="cart__orderStatus">Замовлення успішно виконане</div> : ""}
          </div>
        )}
      </div>
    </section>
  );
};

const CartPageBody = (props) => {
  const [formStatus, setFormStatus] = useState(true);
  let cart = props.cart;
  let resultPrice = props.resultPrice;

  const changeFormStatus = () => {
    setFormStatus(!formStatus);
  };

  return (
    <div className="cart__body">
      <table className="cart__table table-cart">
        <thead className="table-cart__header header-table-cart">
          <tr className="header-table-cart__row">
            <th className="header-table-cart__item">Название</th>
            <th className="header-table-cart__item">Описание</th>
            <th className="header-table-cart__item">Кол-во.</th>
            <th className="header-table-cart__item">Цена</th>
          </tr>
        </thead>

        <tbody className="table-cart__body body-table-cart">
          {cart.map((product) => (
            <TableItem key={product._id} product={product} deleteFromCart={props.deleteFromCart} cart={props.cart} setCart={props.setCart} />
          ))}
        </tbody>
      </table>
      <div className="cart__footer">
        <div className="cart__result">
          Всего: {resultPrice} {cart[0].currency}
        </div>
        <button className="cart__buy" onClick={changeFormStatus}>
          {formStatus ? <>Купить</> : <>Свернуть</>}
        </button>
      </div>
      {formStatus ? "" : <CartBuyForm cart={props.cart} clearCart={props.clearCart} setOrderStatus={props.setOrderStatus} />}
    </div>
  );
};
export default CartPage;
