import React from 'react';
import style from './ProductItem.module.css';

const ProductItem = ({image, title, price, description, isFavorite, id, toggleIsFavorite, addProductToCart}) => {
    const onToggleIsFavorite = () => {
        toggleIsFavorite(id);
    };
    const onAddProductToCart = () => {
        addProductToCart(id, title, price);
    };

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={image} alt="Product"/>
                <div onClick={onToggleIsFavorite} className={style.favorite}>{isFavorite ? <span>&#9733;</span>
                    : <span>&#9734;</span>}</div>
            </div>
            <h2>{title}</h2>
            <div className={style.price}>
                <div>{price}</div>
                <div onClick={onAddProductToCart} className={style.buy}>Add to cart</div>
            </div>
            <div className={style.description}>{description}</div>
        </div>
    )
};

export default ProductItem;