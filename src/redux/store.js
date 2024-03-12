import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import PageItems from "./slices/PageItems";


export const store = configureStore({
    reducer:{
        items: ProductSlice,
        pageItems: PageItems
    }
})