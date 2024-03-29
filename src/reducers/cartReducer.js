export const cartInitialState = {
    cart:[]
}

export const cartReducer=(state, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [{ ...action.payload, qty: 1 }, ...state.cart] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
            };
        case "CHANGE_CART_QTY":
            return {
                ...state, cart: state.cart.map(el=>{
                    if(el.id===action.payload.id) return {...el, qty:action.payload.qty}
                    else return el;
                })
            }
            // return {
            //     ...state,
            //     cart: state.cart.filter((c) =>
            //         c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
            //     ),
            // };
        default:
            return state;
    }
}
