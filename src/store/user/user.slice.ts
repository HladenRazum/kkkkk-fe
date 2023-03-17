import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../types/theme.type";

interface UserState {
   theme: Theme;
}

const theme = localStorage.getItem("theme") as Theme;

const initialState: UserState = {
   theme: theme || "light",
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      changeTheme: (state, action: PayloadAction<Theme>) => {
         state.theme = action.payload;
         document.body.setAttribute("class", state.theme);
         localStorage.setItem("theme", action.payload);
      },
   },
});

export const { changeTheme } = userSlice.actions;

export const getTheme = (state: any): Theme => state.user.theme;

export default userSlice;
