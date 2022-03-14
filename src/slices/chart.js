import { createSlice } from '@reduxjs/toolkit'

export const chartSlice = createSlice({
    name: 'chart',
    initialState: {
        value: []
    },
    reducers: {
        add:  (state, value) => {
            state.chart = value.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { add } = chartSlice.actions

export default chartSlice.reducer