import React, { useState } from "react";
import { createOrder } from "../actions/order";

const CartBuyForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+38");
  const [address, setAddress] = useState("");

  return (
    <div className="cart__contacts contacts">
      <div className="contacts__container">
        <form className="contacts__form"
          onSubmit={(e) => {
            e.preventDefault();
            createOrder(
              name,
              email,
              phone,
              address,
              props.cart.map((element) => {
                return {
                  _id: element._id,
                  name: element.name,
                  quantity: element.quantity,
                };
              })
            );
            props.setOrderStatus(true);
            props.clearCart();
          }}
        >
          <label className="contacts__field">
            Ім'я:
            <input className="contacts__input" type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
          </label>
          <label className="contacts__field">
            Електронна пошта:
            <input className="contacts__input" type="email" name="email" pattern=".+@*\.*" size="30" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>
          <label className="contacts__field">
            Номер телефону:
            <input className="contacts__input" type="tel" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required />
          </label>
          <label className="contacts__field">
            Адреса доставки:
            <input className="contacts__input" type="text" name="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
          </label>
          <input className="contacts__submit" type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default CartBuyForm;
