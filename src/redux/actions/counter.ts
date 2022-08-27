import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    toZero: (state) => {
        state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, toZero } = counterSlice.actions

export default counterSlice.reducer