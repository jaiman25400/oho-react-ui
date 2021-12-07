import React from 'react';
import BestValueProduct from './HomeSection/BestProduct/BestValueProduct';
import BlackFriday from './HomeSection/BlackFriday/BlackFriday';
import InStoreProduct from './HomeSection/InStoreProduct/InStoreProduct';
import ProductList from './HomeSection/ProductList/ProductList';
import "./HomeSection.css";

const Home = () => {
    return (
        <div>
            <BestValueProduct />
            <ProductList />
            <InStoreProduct />
            <BlackFriday />
        </div>
    )
}

export default Home;
