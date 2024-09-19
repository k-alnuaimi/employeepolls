import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";
import routesConfig from "../routes/routesConfig";
import { AuthProvider } from "../AuthContext";
import { Provider } from "react-redux";
import { Box, ChakraProvider } from "@chakra-ui/react";
import store from "../store";




describe('Questions', () => {
  it('render Questions component', async () => {

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/questions"]
    })

    render(<AuthProvider>
      <Provider store={store}>
        <ChakraProvider>
          <Box minH="100vh">
            <RouterProvider router={router} />

          </Box>
        </ChakraProvider>
      </Provider>
    </AuthProvider>)
    screen.debug()

  })

})

