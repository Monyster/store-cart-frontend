import axios from "axios";
import React, { useEffect, useState } from "react";
import StoreItem from "../components/StoreItem";

const McDonaldPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/McDonald`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section className="main__store store">
      <div className="store__container">
        <div className="store__header header-block">
          <h1 className="header-block__title">McDonald's</h1>
          <div className="header-block__subtitle">Реалізуємо ваші бажання</div>
        </div>
        <div className="store__body">
          {products.map((product) => (
            <StoreItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default McDonaldPage;
