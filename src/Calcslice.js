import { createSlice, createSlice } from "@reduxjs/toolkit";

const createSlice =createSlice({
    name : 'calc',
    initialSate : {
        result:0,
        current: 0 
    },
    reducers: {
        checking(state, action) {
            state.result +=action.payload;
        },
        slideingNext(state) {
            state.current += 1000
        },
        slideingNext(s){
            satisfies.current-=100
        }
    }
})
export default Calcslice.reducer;
export const { checking,slideingNext, slideingPrev}= Calcslice.actions;