import React from 'react';
import style from '../Cart.module.css';


const CartItem = ({title, price, quantity, id, incrementQuantity, decrementQuantity, setQuantity, deleteProduct}) => {
    const onIncrementQuantity = () => {
        incrementQuantity(id);
    };

    const onDecrementQuantity = () => {
        decrementQuantity(id);
    };

    const onQuantityChange = (e) => {
        setQuantity(id, e.target.value)
    };

    const onDeleteProduct = () => {
        deleteProduct(id);
    };

    return (
        <tr>
            <td><span onClick={onDeleteProduct} className={style.delete}>&times;</span>{title}</td>
            <td className={style.quantity}>
                <button onClick={onIncrementQuantity} className={style.increment}>+</button>
                <input onChange={onQuantityChange} value={quantity} type="text"/>
                <button onClick={onDecrementQuantity} className={style.decrement}>-</button>
            </td>
            <td>{price}</td>
        </tr>
    )
};

export default CartItem;