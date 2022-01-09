import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: false
  },
  reducers: {
    open: state => {
      state.post = true
    },
    close: state => {
      state.post = false
    },
  }
})

export const { open, close } = postSlice.actions

export const selectPost = (state) => state.post;

export default postSlice.reducer