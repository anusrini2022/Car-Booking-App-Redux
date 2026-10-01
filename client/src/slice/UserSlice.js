import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import MyBookings from "../Components/MyBookings";

const URL = "http://localhost:3000/users";

export const loginUser = createAsyncThunk("/users/login", async (userData) => {
  try {
    const response = await axios.post(`${URL}/finduserbyemailId`, userData);
    console.log(response.data)
    return await response.data;
    
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Invalid username or password");
  }
});
export const createUser = createAsyncThunk("/users/signup", async (user) => {
  const response = await axios.post(`${URL}/signup`, user);
  console.log(response.data)
  return await response.data;
});

export const showUsers=createAsyncThunk("/users/showusers",async()=>{
  const response=await axios.get(`${URL}/showUsers`);
   return response.data;
})
const userSlice = createSlice({
  name: "user",
  initialState: {
    message: "",
    loading: false,
    user: {},
    users:[],
    userName:"",
    myBookings:[]
    
  },
  reducers: {
    userDetails:(state,action)=>{
      console.log(action)
       state.userName=action.payload;
       console.log(state.userName);
    },
    bookingDetails:(state,action)=>{
      state.myBookings=action.payload;
      console.log(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload?.msg || action.payload?.message || "Login successful";
        state.user = action.payload?.user || action.payload || {};
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload || "Error in Login";
        state.user = {};
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.message = "Pending";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "User created successfully";
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.message = "Error in creating Users";
        state.user = action.payload || {};
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.message = "Pending";
      })
       .addCase(showUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "User loaded successfully";
        state.users = action.payload;
      })
      .addCase(showUsers.rejected, (state, action) => {
        state.loading = false;
        state.message = "Error in loading Users";
        state.users = action.payload || {};
      })
      .addCase(showUsers.pending, (state) => {
        state.loading = true;
        state.message = "Pending";
      });
  },
});
export let {userDetails,bookingDetails}=userSlice.actions;
export default userSlice.reducer;