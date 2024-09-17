import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: {
    sarahedo: {
        id: 'sarahedo',
        password:'password123',
        name: 'Sarah Edo',
        avatarURL: "https://img.icons8.com/?size=100&id=20748&format=png&color=000000",
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionOne',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      },
      tylermcginnis: {
        id: 'tylermcginnis',
        password:'abc321',
        name: 'Tyler McGinnis',
        avatarURL: "https://img.icons8.com/?size=100&id=108296&format=png&color=000000",
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
      },
      mtsamis: {
        id: 'mtsamis',
        password:'xyz123',
        name: 'Mike Tsamis',
        avatarURL: "https://img.icons8.com/?size=100&id=23243&format=png&color=000000",
        answers: {
          "xj352vofupe1dqz9emx13r": 'optionOne',
          "vthrdm985a262al8qx3do": 'optionTwo',
          "6ni6ok3ym7mf1p33lnez": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
      }
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUserAnswer: (state, action) => {

        const {authedUser,qid,answer} = action.payload
        state.users = {
          ...state.users,
          [authedUser]: {
            ...state.users[authedUser],
            answers: {
              ...state.users[authedUser].answers,
              [qid]: answer
            }
          }
        }  
     
      },saveUserQuestion: (state, action) => {

        const {question_id} = action.payload
        state.users = {
          ...state.users,
          [authedUser]: {
            ...state.users[authedUser],
            questions: [
              ...state.users[authedUser].questions,
              question_id
          ]
          }
        }  
     
      }
    
  },
}
);



export const {saveUserAnswer,saveUserQuestion} = usersSlice.actions
export default usersSlice.reducer;