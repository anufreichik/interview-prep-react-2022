import React from 'react';

const ProductCard = ({prod, cartState, dispatchCart}) => {


    return (
        <div key={prod.id} style={{display:'flex',flexDirection:'column',padding:10,border:"1px solid grey",width:"30%",marginTop:10,gap:10}}>
            <img src={prod.thumbnail} alt={prod.title} style={{height:200,objectFit:'cover'}}/>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <span>{prod.title}</span>
                <b>$ {prod.price}</b>
            </div>
            {cartState?.cart.some((el) =>el.id === prod.id) ? (
                <button
                    style={{padding:5,border:0,borderRadius:5,backgroundColor:'#e53935',color:'white'}}
                    onClick={() => dispatchCart({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                    })
                    }
                >
                    Remove from Cart
                </button>
            ) : (
                <button
                    style={{padding:5,border:0,borderRadius:5,backgroundColor:'green',color:'white'}}
                    onClick={() => dispatchCart({
                        type: "ADD_TO_CART",
                        payload: {
                            id: prod.id,
                            title: prod.title,
                            thumbnail: prod.thumbnail,
                            qty: prod.qty,
                            price: prod.price,
                        },
                    })
                    }
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default ProductCard;
