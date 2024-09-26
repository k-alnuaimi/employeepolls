import { Box, ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"


const ProvidersWithoutAuth = ({ store, router }) => {

    return (
        <Provider store={store}>
            <ChakraProvider>
                <Box minH="100vh">
                    <RouterProvider router={router} />

                </Box>
            </ChakraProvider>
        </Provider>
    )
}

export default ProvidersWithoutAuth;