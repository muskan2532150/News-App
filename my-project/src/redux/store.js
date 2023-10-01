import { configureStore } from "@reduxjs/toolkit";
import PropertySliceReducer from "./PropertySlice";

const store = configureStore({
    reducer: {
    property: PropertySliceReducer,
    },
})

export default store