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
  authenticatedUser:{}
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state, action) => {
        state.authenticatedUser = {}
    },
    login: (state,action) =>{
        state.authenticatedUser = action.payload
    }
    
  },
}
);



export const { logout,login} = usersSlice.actions;

export default usersSlice.reducer;