import { Box, ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { AuthProvider } from './AuthContext.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import QuestionDetails from './routes/QuestionDetails.jsx'
import Questions from './routes/Questions.jsx'
import store from './store.js'
import PrivateRoutes from './utils/PrivateRoutes.jsx'


const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
    index: true
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Home />,
        children: [
          {
            path: "/questions",
            element: <Questions />,
            index: true
          }, {
            path: "/questions/:question_id",
            element: <QuestionDetails />
          }

        ]

      }


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
