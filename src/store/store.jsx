import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../Slices/ToDoSlice'

export const store = configureStore({
  reducer: {todo:todoSlice},
})



