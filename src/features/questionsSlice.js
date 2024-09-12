import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../_DATA";
const initialState = {
  questions: questions,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    saveQuestion: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    saveQuestionAnswer: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    }, formatQuestion: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    }, getQuestions: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    
  },
});

export const { saveQuestion, saveQuestionAnswer,formatQuestion,getQuestions} = questionSlice.actions;

export default questionSlice.reducer;