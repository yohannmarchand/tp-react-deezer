import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracks'

export default configureStore({
  reducer: {
    tracks: tracksReducer
  }
})