import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/actions/counter';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
