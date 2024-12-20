import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice.js";
import authReducer from "./authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer, // Добавляем редьюсер пользователя
    },
});