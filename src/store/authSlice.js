import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null, // Загружаем данные из localStorage
    isAuthenticated: !!localStorage.getItem("user"), // Проверяем, есть ли пользователь
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("user", JSON.stringify(action.payload)); // Сохраняем пользователя в localStorage
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user"); // Удаляем данные из localStorage
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
