const ADD_PRODUCT_TO_CART = 'test/cart/ADD_PRODUCT_TO_CART';
const INCREMENT_QUANTITY = 'test/cart/INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'test/cart/DECREMENT_QUANTITY';
const SET_QUANTITY = 'test/cart/SET_QUANTITY';
const DELETE_PRODUCT = 'test/cart/DELETE_PRODUCT';

let initialState = {
    products: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            if (state.products.find(p => p.id == action.id)) {
                return {
                    ...state,
                    products: state.products.map(p => {
                        if (p.id == action.id) {
                            return {
                                ...p,
                                quantity: p.quantity + 1
                            };
                        } else {
                            return p;
                        }
                    })
                }
            }
            let product = {
                id: action.id,
                title: action.title,
                quantity: 1,
                price: action.price
            };
            return {
                ...state,
                products: [...state.products, product]
            }
        }
        case INCREMENT_QUANTITY: {
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id == action.id) {
                        return {
                            ...p,
                            quantity: +p.quantity + 1
                        };
                    } else {
                        return p;
                    }
                })
            }
        }
        case DECREMENT_QUANTITY: {
            if (state.products.find(p => p.id == action.id).quantity == 1) {
                return state
            }
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id == action.id) {
                        return {
                            ...p,
                            quantity: +p.quantity - 1
                        };
                    } else {
                        return p;
                    }
                })
            }
        }
        case SET_QUANTITY: {
            return {
                ...state,
                products: state.products.map(p => {
                        if (p.id == action.id) {
                            return {
                                ...p,
                                quantity: action.quantity
                            };
                        } else {
                            return p;
                        }
                    }
                )
            }
        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                products: state.products.filter(p => p.id != action.id)
            }
        }
        default:
            return state;
    }
};

export const addProductToCart = (id, title, price) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        id,
        title,
        price
    }
};
export const incrementQuantity = (id) => {
    return {
        type: INCREMENT_QUANTITY,
        id
    }
};
export const decrementQuantity = (id) => {
    return {
        type: DECREMENT_QUANTITY,
        id
    }
};

export const setQuantity = (id, quantity) => {
    return {
        type: SET_QUANTITY,
        id,
        quantity
    }
};

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
};

export default cartReducer;