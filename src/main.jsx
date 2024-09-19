import { Box, Center, ChakraProvider, Text } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { AuthProvider } from './AuthContext.jsx'
import routesConfig from './routes/routesConfig.jsx'
import store from './store.js'



const router = createBrowserRouter(routesConfig);




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
