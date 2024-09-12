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
      const formattedQuestion = formatQuestion(action.payload)
      state.questions = {
        ...state.questions,
        [formattedQuestion.id]: formattedQuestion
      }
    },
    saveQuestionAnswer: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    }
    
  },
});

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export const { saveQuestion, saveQuestionAnswer} = questionSlice.actions;

export default questionSlice.reducer;