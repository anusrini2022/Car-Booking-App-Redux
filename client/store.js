import { configureStore } from "@reduxjs/toolkit";
import reducer from "./src/slice/CarBookingSlice";
import carListReducer from "./src/slice/CarLists"
import userReducer from "./src/slice/UserSlice";

const store = configureStore({
    reducer:
    {
        carbookingReducer: reducer,
        carListReducer: carListReducer,
        userReducer: userReducer
    }
})
export default store;