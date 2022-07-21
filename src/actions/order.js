import axios from "axios";

export const createOrder = async (name, email, phone, address, orderList) => {
  try {
    var querystring = require("qs");

    const response = axios.post(
      "http://localhost:5000/orders",
      querystring.stringify({
        name: name,
        email: email,
        phone: phone,
        address: address,
        orderList: orderList,
      })
    );
  } catch (error) {
    alert(error);
  }
};
