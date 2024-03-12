import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    singlePageItems : []
}

export const PageItems = createSlice({
    name:"pageItems",
    initialState,
    reducers:{
        setPageItems:(state, action)=>{
            state.singlePageItems = action.payload
        },
        removePageItems:(state, action)=>{
            state.singlePageItems = state.singlePageItems.filter((item) => item.id !== action.payload);
         },
      
    } 
})

export const {setPageItems, removePageItems} = PageItems.actions;
export default PageItems.reducer;