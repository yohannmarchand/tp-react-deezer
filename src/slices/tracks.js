import {createSlice} from "@reduxjs/toolkit";

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    value: [],
    all:[],
    current: {},
  },
  reducers: {
    fetch: (state, action) => {
      state.all = action.payload
      state.value = action.payload
    },

    filter: (state, action) => {
      state.value = state.all.filter(track => {
        return track.title.toLowerCase().match(action.payload.toLowerCase())
      })
    },

    current: (state, action) => {
      state.current = action.payload
    },

    addToTrackList: (state, action) => {
      state.current.tracklist = action.payload
    },
  }
})

export const { fetch, current, filter, addToTrackList } = tracksSlice.actions

export default tracksSlice.reducer