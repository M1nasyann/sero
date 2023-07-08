import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Calcslice from "./Calcslice";

const rootReduser = combineReducers({
    calc : Calcslice,
})

export const store = configureStore({
    reducer : rootReduser
})