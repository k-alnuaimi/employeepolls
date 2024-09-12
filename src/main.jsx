import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Root",
    element: <Root />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Box minH="100vh">
          <RouterProvider router={router} />

        </Box>
      </ChakraProvider>
    </Provider>
  </StrictMode>,
)
