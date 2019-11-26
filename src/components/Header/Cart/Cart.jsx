import React from 'react';
import style from './Cart.module.css';
import CartItem from "./CartItem/CartItem";


const Cart = ({setIsShowCart, productsInCart, totalPrice, ...props}) => {
    const onCartClose = () => {
        setIsShowCart(false);
    };
    return (
        <div className={style.overlay}>
            <div className={style.cart}>
                <div onClick={onCartClose} className={style.close}>&times;</div>
                <table>
                    <thead>
                    <tr>
                        <th>The product's name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productsInCart.map(product => {
                        return <CartItem key={product.id} id={product.id} title={product.title} price={product.price}
                                         quantity={product.quantity} {...props}/>
                    })}
                    </tbody>
                </table>
                <div className={style.cartFooter}>
                    <div className={style.total}>Total amount: ${totalPrice}</div>
                    <button className={style.checkout}>Сheckout</button>
                </div>
            </div>
        </div>
    )
};

export default Cart;