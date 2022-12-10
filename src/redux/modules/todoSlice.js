import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoFunc = createAsyncThunk(
  "GET_TODO",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`/todos/${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const updateTodoFunc = createAsyncThunk(
  "UPDATE_TODO",
  async (arg, thunkAPI) => {
    try {
      axios.patch(`/todos/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  todo: {
    id: 0,
    body: "",
    userName: "",
    title: "",
  },
  error: null,
  isLoading: false,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.todo = {
        id: 0,
        body: "",
        userName: "",
        title: "",
      };
    },
  },
  extraReducers: {
    [getTodoFunc.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [getTodoFunc.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;
