import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// so it turns out the donot wasnt really working will so i needed to add the token to a another file

import { API_KEY } from '../api_token';




const initialState = {
    status: 'idle',
    data: [],
    errors: null

}

export const getWeatherInfo = createAsyncThunk(
    'weather/getWeatherInfo',
    async (city) => {
        const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`

        try {
            const res = await fetch(API_URL)
            return await res.json()
        } catch (error) {
            return error
        }

    }
)



export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getWeatherInfo.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(getWeatherInfo.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.data = action.payload
        })
        builder.addCase(getWeatherInfo.rejected, (state, action) => {
            state.status = "failed"
            state.errors = "failed"
        })
    }
})

export default weatherSlice.reducer
export const getweatherData = (state) => state.weather.data
export const getweatherDataStatus = (state) => state.weather.status
export const getweatherDataErrors = (state) => state.weather.errors
