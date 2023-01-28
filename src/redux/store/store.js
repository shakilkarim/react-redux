import { configureStore } from "@reduxjs/toolkit";
import reduxCounter from '../state/counter/counterSlice';
import todoReducer from '../state/todo/todoSlice';

export default configureStore({
    reducer:{
        counter:reduxCounter,
        todo:todoReducer
    }
})