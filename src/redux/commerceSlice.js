import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productData: [],
    userInfo : null
}
export const commerceSlice = createSlice({
    name: "ecomm",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            const item = state.productData.find((elm)=> elm._id === action.payload._id)
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        deleteItem: (state, action)=>{
            state.productData = state.productData.filter(elm => elm._id !== action.payload)
            console.log(action);
        },
        resetCart: (state)=>{
            state.productData = []
        },
        incrementQuantity: (state, action)=>{
            const item = state.productData.find((elm)=> elm._id === action.payload._id)
            if(item){
                item.quantity++
            }
        },
        decrementQuantity: (state, action)=>{
            const item = state.productData.find((elm)=> elm._id === action.payload._id)
            
            if(item.quantity === 1){
                item.quantity = 1
            }else{
                item.quantity--
            }
        },
        addUser: (state, action)=>{
            state.userInfo = action.payload
        },
        removeUser: (state)=>{
            state.userInfo = null
        }
    }
})

export const {
    addToCart,
    deleteItem, 
    resetCart, 
    incrementQuantity,
    addUser,
    removeUser,
    decrementQuantity} = commerceSlice.actions
export default commerceSlice.reducer 