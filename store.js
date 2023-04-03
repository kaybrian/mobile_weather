import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './Slices/LocationSlice';


export default store = configureStore({
    reducer:{
        location:locationReducer
    }
})
