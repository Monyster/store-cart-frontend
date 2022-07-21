import React, { useState } from 'react'
import "./HomePage.css";
import KfcPage from './KfcPage';
import McDonaldPage from './McDonaldPage';

const HomePage = () => {
    const [selectedStore, setSelectedStore] = useState(1);

    return (
        <section className='main__selection selection'>
            <div className='selection__container'>
                <div className="selection__header header-block">
                    <h1 className="header-block__title">Оберіть магазин</h1>
                </div>
            </div>
            <div className='selection_body'>
                <button className="selection__link" onClick={() => setSelectedStore(1)} >McDonald's</button>
                <button className="selection__link" onClick={() => setSelectedStore(2)}>KFC</button>

            </div>
            {
                selectedStore === 0
                    ? <div>Оберіть магазин</div>
                    : selectedStore === 1
                        ? <McDonaldPage />
                        : selectedStore === 2
                            ? <KfcPage /> : ""
            }
        </section>
    )
}

export default HomePage