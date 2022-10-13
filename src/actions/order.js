import axios from "axios";

export const createOrder = async (name, email, phone, address, orderList) => {
  try {
    var querystring = require("qs");

    axios.post(
      "http://3.228.71.220:5000/orders",
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
