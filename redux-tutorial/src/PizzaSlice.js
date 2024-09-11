import { createSlice } from "@reduxjs/toolkit";

const initialState={
    toppings:['pepperoni','cheese'],
    sauces:['ketchup','meyonnaise']
}

const PizzaSlice=createSlice({
    name :'Pizza',
    initialState,
    reducers : {
        addTopping : (state,action) => {
            state.toppings=[...state.toppings,action.payload]
        },
        addSauce:(state,action)=>{
            state.sauces=[...state.sauces,action.payload]
        }
    }

})
export const {addTopping,addSauce}=PizzaSlice.actions
export default PizzaSlice.reducer


