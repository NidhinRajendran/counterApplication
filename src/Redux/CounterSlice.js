import { createSlice } from "@reduxjs/toolkit";

/**createSlice() - automatically provides reducer as weel as action */
export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },

    /*actions to be given in reducers */
    reducers:{
        increment: (state)=>{
            state.value+=1
        },

        decrement: (state)=>{
            state.value-=1
        },

        reset: (state)=>{
            state.value=0
        },

        changeRange: (state,action)=>{
            state.value+=actio.payload
        }
    }
})

/*actions are needed for components */

export const {increment,decrement,reset,changeRange}=counterSlice.actions

/*reducer need to store to update state*/
export default counterSlice.reducer