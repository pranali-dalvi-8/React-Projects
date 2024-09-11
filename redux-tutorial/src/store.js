// import { configureStore } from "@reduxjs/toolkit";
// import PizzaSlice from "./PizzaSlice";

// export const Store=configureStore({
//   reducer:{
//     Pizza : PizzaSlice
//   }
// });


import { configureStore } from "@reduxjs/toolkit";
import PizzaSlice from "./PizzaSlice"

export const store = configureStore({
    reducer : {
        Pizza : PizzaSlice
    }
});
