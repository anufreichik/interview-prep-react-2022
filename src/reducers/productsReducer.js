export const productsInitialState = {
    products:[]
}

export const productsReducer=(state, action)=>{
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state, products:action.payload}
        default:
            return state;
    }
}
