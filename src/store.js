import { configureStore } from '@reduxjs/toolkit'
import chartReducer from "./slices/chart";

export default configureStore({
    reducer: {
        chart: chartReducer
    }
})