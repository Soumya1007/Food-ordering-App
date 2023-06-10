import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[] //because initially cart is empty
}

export const cartSlice=createSlice({
name:'cart',
initialState,
reducers:{
    addToCart:(state,action)=>{
        return {products:[...state.products, {...action.payload, amount:1}]}//action.payload will access current item tp the cart when addtocart is operated
    },
    clearCart:(state)=>{
        return {products:[]}
    },
    incrementProductAmount:(state,action)=>{
        return {products:state.products.map(product=>product.id===action.payload.id?{...product,amount:product.amount+1}:product)}
    },
    decrementProductAmount:(state,action)=>{
        return {products:state.products.map(product=>product.id===action.payload.id?{...product,amount:product.amount-1}:product)}
    },
}
});

export const cartProducts=state=>state.cart.products;

export const {addToCart,clearCart,incrementProductAmount,decrementProductAmount}=cartSlice.actions;
export default cartSlice.reducer;