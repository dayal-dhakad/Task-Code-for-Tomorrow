import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItems: [],
  currentPage: 1,
};

export const ProductSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.productItems = action.payload;
    },
    removeItems: (state, action) => {
      state.productItems = state.productItems.filter(
        (item) => item.id !== action.payload
      );
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPreviousPage:(state,action)=>{
      state.currentPage=state.currentPage-1;
    },
    setNextPage:(state,action)=>{
      state.currentPage=state.currentPage+1;
    }
  },
});

export const { setItems, removeItems, setCurrentPage,setNextPage, setPreviousPage } = ProductSlice.actions;
export default ProductSlice.reducer;
