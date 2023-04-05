import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from "@env"

// so it turns out the donot wasnt really working will so i needed to add the token to a another file

import { API_TOKEN } from '../api_token';

const initialState = {
    status: 'idle',
    data: [],
    errors: null

}

export const getLocation = createAsyncThunk(
    'location/getLocation',
    async (ip) => {


        try {
            const res = await fetch(`https://${API_URL}/json?token=${API_TOKEN}`)
            return await res.json()
        } catch (error) {
            return error
        }

    }
)



export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getLocation.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(getLocation.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.data = action.payload
        })
        builder.addCase(getLocation.rejected, (state, action) => {
            state.status = "failed"
            state.errors = "failed"
        })
    }
})

export default locationSlice.reducer
export const getUserLocation = (state) => state.location.data
export const userCods = (state) => state.location.data.loc
export const getLocationStatus = (state) => state.location.status
export const getLOcationErrors = (state) => state.location.errors
