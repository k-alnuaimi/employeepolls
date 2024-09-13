import { Box, ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider
} from "react-router-dom"
import Login from './routes/Login.jsx'
import Root from './routes/Root.jsx'
import store from './store.js'
import Questions from './routes/Questions.jsx'
import { AuthProvider } from './AuthContext.jsx'
import { path } from 'framer-motion/client'
import QuestionDetails from './routes/QuestionDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
    index: true
  },
  {
    path: "/",
    element: <Root />,
    children: [

      {
        index: true,
        loader: () => redirect("/questions")

      },

      {

        path: "/questions",
        element: <Questions />,
        children: [{
          path: ":question_id",
          element: <QuestionDetails />
        }

        ]


      },


    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Provider store={store}>
      <ChakraProvider>
        <Box minH="100vh">
          <RouterProvider router={router} />

        </Box>
      </ChakraProvider>
    </Provider>
  </AuthProvider>
)
