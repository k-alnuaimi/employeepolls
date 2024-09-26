import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  questions: {"8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'Build our new application with Javascript',
    },
    optionTwo: {
      votes: [],
      text: 'Build our new application with Typescript'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'mtsamis',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'hire more frontend developers',
    },
    optionTwo: {
      votes: ['mtsamis', 'sarahedo'],
      text: 'hire more backend developers'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'conduct a release retrospective 1 week after a release',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'conduct release retrospectives quarterly'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'have code reviews conducted by peers',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'have code reviews conducted by managers'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'take a course on ReactJS',
    },
    optionTwo: {
      votes: ['mtsamis'],
      text: 'take a course on unit testing with Jest'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'mtsamis',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['mtsamis'],
      text: 'deploy to production once every two weeks',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'deploy to production once every month'
    }
  }
},
  answeredQuestions:[],
  newQuestions:[],
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

export const pollsSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    saveQuestion: (state, action) => {

      const question = action.payload

      if (!question.optionOneText || !question.optionTwoText || !question.author) {
        throw new Error("Please provide optionOneText, optionTwoText, and author")
      }
      const formattedQuestion = formatQuestion(question)
      state.questions = {
        ...state.questions,
        [formattedQuestion.id]: formattedQuestion
      }
      state.newQuestions.push(formattedQuestion)
      state.newQuestions.sort((a,b)=>b.timestamp-a.timestamp)

      state.users = {
        ...state.users,
        [formattedQuestion.author]: {
          ...state.users[formattedQuestion.author],
          questions: [
            ...state.users[formattedQuestion.author].questions,
            formattedQuestion.id
        ]
        }
      }  
      
    },
    saveQuestionAnswer: (state, action) => {

      const {qid,answer,authedUser} = action.payload
      state.questions = {
        ...state.questions,
        [qid]: {
          ...state.questions[qid],
          [answer]: {
            ...state.questions[qid][answer],
            votes: state.questions[qid][answer].votes.concat([authedUser])
          }
        }
      }
    }, setAnsweredQuestions :(state,action)=>{
      state.answeredQuestions = action.payload
      state.answeredQuestions.sort((a,b)=>b.timestamp-a.timestamp)

    }, setNewQuestions :(state,action)=>{
      state.newQuestions = action.payload
      state.newQuestions.sort((a,b)=>b.timestamp-a.timestamp)
    }
, saveUserAnswer: (state, action) => {

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
 
  }
}});

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

export const {saveQuestion, saveQuestionAnswer,setAnsweredQuestions,setNewQuestions,saveUserQuestion,saveUserAnswer} = pollsSlice.actions;

export default pollsSlice.reducer;