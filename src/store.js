import { combineSlices, configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/questionsSlice";
import usersReducer from "./features/usersSlice";


const store = configureStore({
  reducer: {
    questions:questionsReducer,
    users:usersReducer,
  },
});

export default store;