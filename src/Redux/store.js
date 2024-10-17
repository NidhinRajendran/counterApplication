import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";


export const store = configureStore({
    reducer:{
        counter:counterSlice  /*counter - is the name of the reducer to update the state. */
    }
})
