import React, {useEffect} from 'react';
import style from './ProductsList.module.css';
import ProductItem from "./ProductItem/ProductItem";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {changeSelectedCategory, toggleIsFavorite} from "../../../Redux/products-reducer";
import {getProductItems} from "../../../Redux/productSelector";
import {addProductToCart} from "../../../Redux/cart-reducer";


const ProductsList = (props) => {
    useEffect(() => {
        props.changeSelectedCategory(props.match.params.category);
    }, [props.match.params.category]);

    return (
        <div className={style.container}>
            {props.products.map(product => {
                return <ProductItem key={product.id} id={product.id} title={product.title}
                                    description={product.description}
                                    image={product.image} price={product.price} isFavorite={product.isFavorite}
                                    toggleIsFavorite={props.toggleIsFavorite}
                                    addProductToCart={props.addProductToCart}/>
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        products: getProductItems(state),
    }
};

export default compose(connect(mapStateToProps, {
    changeSelectedCategory,
    toggleIsFavorite,
    addProductToCart
}), withRouter)(ProductsList);