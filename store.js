import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './Slices/LocationSlice';
import weatherReducer from "./Slices/WeatherSlice";

export default store = configureStore({
    reducer:{
        location:locationReducer,
        weather:weatherReducer
    }
})
