import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000/CarBooking";

export const viewBookings = createAsyncThunk("bookings/showbookings", async () => {
  const response = await axios.get(`${URL}/showbookings`);
  return response.data;
});

export const getBooking=createAsyncThunk("bookings/getBookings",async(bookingDetails)=>{
const response=await axios.post(`${URL}/booking`,bookingDetails);
return response.data;
})

export const updateBooking = createAsyncThunk(
  "bookings/updatecarbooking",
  async ({ id, status }) => {
    const response = await axios.put(`${URL}/updateStatus/${id}`, { status });
    return response.data;
  }
);
const carBookingSlice = createSlice({
  name: "carbooking",
  initialState: {
    name: "carbooking",
    carbookings: [],
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.carbookings = action.payload;
        state.message = "Bookings loaded successfully";
      })
      .addCase(viewBookings.pending, (state) => {
        state.loading = true;
        state.message = "Loading bookings...";
      })
      .addCase(viewBookings.rejected, (state, action) => {
        state.loading = false;
        state.message = action.error.message || "Failed to load bookings";
      }).
      addCase(getBooking.fulfilled,(state,action)=>{
       state.loading=false;
       //state.carbookings=action.payload;
       state.message=action.payload;
      })
      .addCase(getBooking.pending, (state) => {
        state.loading = true;
        state.message = " booking...";
      })
      .addCase(getBooking.rejected, (state, action) => {
        state.loading = false;
        state.message = action.error.message || "Failed to load bookings";
      })
      .
      addCase(updateBooking.fulfilled,(state,action)=>{
       state.loading=false;
       //state.carbookings=action.payload;
       state.message=action.payload;
      })
      .addCase(updateBooking.pending, (state) => {
        state.loading = true;
      
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.loading = false;
        state.message = action.error.message || "Failed to load bookings";
      })
      
  }
});

export default carBookingSlice.reducer;