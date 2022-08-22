import React from 'react';
import ProductCard from "./ProductCard";


const Products = ({prodState, cartState, dispatchCart}) => {
    const {products} = prodState;
    return (
        <div className="App" style={{display:'flex',flexWrap:"wrap",justifyContent:'space-evenly',width:'80%'}}>
            {products.map((prod)=>(
               <ProductCard prod={prod} key={prod.id} cartState={cartState} dispatchCart={dispatchCart}/>
            ))}
        </div>
    );
};

export default Products;
