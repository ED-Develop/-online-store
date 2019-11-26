import React from 'react';
import style from './Products.module.css';
import Sidebar from "./Sidebar/Sidebar";
import ProductsList from "./ProductsList/ProductsList";


const Products = () => {
    return (
        <div className={style.wrapper}>
            <Sidebar/>
            <ProductsList/>
        </div>
    )
};

export default Products;