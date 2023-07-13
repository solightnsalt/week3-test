import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/* 2초 지연을 시키는 함수입니다 (비동기 작업) */
import { waitTwoSeconds } from "../../utils";

export const __addToDo = createAsyncThunk("__addToDo", async (payload, thunkAPI) => {
	await waitTwoSeconds();
	thunkAPI.dispatch(addTodo(payload));
	return payload;
});

export const __deleteTodo = createAsyncThunk("__deleteToDo", async (payload, thunkAPI) => {
	await waitTwoSeconds();
	thunkAPI.dispatch(deleteTodo(payload));
	return payload;
});

const initialState = {
	list: [{ id: 1, title: "예시", body: "🤔" }],
};

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.list = [...state.list, action.payload];
		},
		deleteTodo: (state, action) => {
			state.list = state.list.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
