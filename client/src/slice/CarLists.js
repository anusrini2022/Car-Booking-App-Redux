import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/CarBooking/CarLists";

export const viewCars = createAsyncThunk("carbookings/viewcars", async () => {
  const response = await axios.get(`${BASE_URL}/showcars`);
  return await response.data;
});

export const addCar=createAsyncThunk("carbooking/carlists/addcar",async(carDetails)=>{
  const response=await axios.post(`${BASE_URL}/addcarDetails`,carDetails);
  return await response.data;
})

export const viewCarsById = createAsyncThunk("carbookings/viewcars/id", async (id) => {
  const response = await axios.get(`${BASE_URL}/showcars/${id}`);
  return await response.data;
});

export const updateCar = createAsyncThunk("carbookings/updatecar", async ({ id, carDetails }) => {
  const response = await axios.put(`${BASE_URL}/update/${id}`, carDetails);
  return await response.data;
});

export const deleteCar = createAsyncThunk("carbookings/deletecar", async (id) => {
  alert(id);
  const response = await axios.delete(`${BASE_URL}/delete/${id}`);
  return { id, data: response.data };
});

const CarListSlice = createSlice({
  name: "CarLists",
  initialState: {
    message: "",
    loading: false,
    cars: [],
    car: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
        state.message = "Cars Loaded Successfully";
      })
      .addCase(viewCars.rejected, (state) => {
        state.loading = false;
        state.message = "Error in loading cars";
      })
      .addCase(viewCars.pending, (state) => {
        state.loading = true;
        state.message = "Cars are Loading";
      })
      .addCase(viewCarsById.fulfilled, (state, action) => {
        state.loading = false;
        state.car = action.payload;
      })
      .addCase(viewCarsById.rejected, (state) => {
        state.loading = false;
        state.message = "Error in loading car";
      })
      .addCase(viewCarsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload?.message || "Car updated successfully";
      })
      .addCase(updateCar.rejected, (state) => {
        state.loading = false;
        state.message = "Error in updating car";
      })
      .addCase(updateCar.pending, (state) => {
        state.loading = true;
        state.message = "Updating car...";
      })
      .addCase(deleteCar.fulfilled, (state) => {
        state.loading = false;
        state.message = "Car deleted successfully";
      })
      .addCase(deleteCar.rejected, (state) => {
        state.loading = false;
        state.message = "Error in deleting car";
      })
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
        state.message = "Deleting car...";
      })
      .addCase(addCar.fulfilled,(state,action)=>{
        state.loading=false;
        state.message="adding cars"
        state.car=action.payload
        
      })
      .addCase(addCar.rejected,(state,action)=>{
        state.loading=false;
        state.message="Error in Adding cars";
        
      })
      .addCase(addCar.pending,(state,action)=>{
        state.loading=true;
        state.message="pending"
        
      })
  },
});

export default CarListSlice.reducer;