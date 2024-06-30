import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TTodo = {
  id: string
  title: string
  description: string
  priority: string
  isCompleted?: boolean
}

type TInitialState = {
  todos: TTodo[]
}

const initialState: TInitialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false })
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((todo) => todo.id === action.payload)

      task!.isCompleted = !task?.isCompleted

      state.todos = state.todos.sort(
        (a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0)
      )
    },
    updateTodo: (state, action: PayloadAction<TTodo>) => {
      const task = state.todos.find((todo) => todo.id === action.payload.id)

      task!.title = action.payload.title
      task!.description = action.payload.description
      task!.priority = action.payload.priority
    }
  }
})

export const { addTodo, removeTodo, toggleComplete, updateTodo } =
  todoSlice.actions

export default todoSlice.reducer
