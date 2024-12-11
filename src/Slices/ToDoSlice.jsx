import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todoList:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state,action) => {
      state.todoList.push(action.payload)
    },
    deleteTodo: (state,action) => {
      state.todoList=state.todoList.filter(todo=>todo.id!==action.payload.id)
    },
    updateTodo: (state,action) => {
      let todo=state.todoList.findIndex(todo=>todo.id===action.payload.id)
      state.todoList[todo]=action.payload
    },
  },
})

export const { addTodo,deleteTodo } = todoSlice.actions

export default todoSlice.reducer