import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../utils/type";

const initialState: InitialState = {
  job: "",
  content: "",
  jobs: [],
  todos: [],
  status: "",
  error: "",
};
// status: 'idle' | 'loading' | 'succeeded' | 'failed'

const fetchTodos = createAsyncThunk("todolist/fetchTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
});

const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setJobAction: (state, action) => ({
      ...state,
      job: action.payload?.job,
      content: action.payload?.content,
    }),
    addJobAction: (state, action) => ({
      ...state,
      jobs: [
        ...state.jobs,
        { job: action.payload?.job, content: action.payload?.content },
      ],
    }),
    editJobAction: (state, action) => {},
    deleteJobAction: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { setJobAction, addJobAction, editJobAction, deleteJobAction } =
  todolistSlice.actions;
export { fetchTodos, todolistSlice };
export default todolistSlice.reducer;
