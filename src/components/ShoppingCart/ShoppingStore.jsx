import React from 'react';
import Products from "./Products";
import {useEffect, useReducer} from 'react';
import axios from "axios";
import {productsInitialState, productsReducer} from "../../reducers/productsReducer";
import {cartInitialState, cartReducer} from "../../reducers/cartReducer";
import Cart from "./Cart";


const ShoppingStore = () => {
    const [productsState, dispatchProducts] = useReducer(productsReducer, productsInitialState);
    const [cartState, dispatchCart] = useReducer(cartReducer, cartInitialState);

    const getProducts = async () => {
        const {data} = await axios.get('https://dummyjson.com/products');
        console.log(data.products)
        dispatchProducts({
            type:'SET_PRODUCTS',
            payload:data.products
        })
    }

    useEffect( () => {
        getProducts();
    }, [])
    return (
        <div>
            <div style={{display: 'flex'}}>
                <Products prodState={productsState} dispatch={dispatchProducts} dispatchCart={dispatchCart} cartState={cartState}/>
                <Cart  cartState={cartState} dispatchCart={dispatchCart}/>
            </div>

        </div>
    );
};

export default ShoppingStore;
