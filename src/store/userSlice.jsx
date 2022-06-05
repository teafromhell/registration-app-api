import { createSlice } from "@reduxjs/toolkit";
//import api from "../../services/api";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

// export const regUser = createAsyncThunk('users/createUser',
//     async function({...post}, { rejectWithValue }){
//         const response = await api.auth.login()
//     }
//     )

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
