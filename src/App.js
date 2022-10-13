import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <nav className="header__menu menu_header">
              <ul className="menu_header__list">
                <li className="menu_header__item">
                  <Link className="menu_header__link" to="/">
                    Головна
                  </Link>
                </li>
                <li className="menu_header__item">
                  <Link className="menu_header__link" to="cart">
                    Кошик
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
