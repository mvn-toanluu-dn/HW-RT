import { configureStore } from '@reduxjs/toolkit'
import favReducer from '../store/favSlice';

export const store = configureStore({
  reducer: {
    fav: favReducer,
  },
})
