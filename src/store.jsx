
import { configureStore } from "@reduxjs/toolkit";
import postreducer from "./features/posts/postSlice";

// import userSlice from "./reducer";


export const store = configureStore({
    reducer:{
         posts : postreducer
     }
})