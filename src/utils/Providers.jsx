import { Provider } from "react-redux";
import { AuthProvider } from "../AuthContext";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

const Providers = ({ store, router }) => {

    return <AuthProvider>
        <Provider store={store}>
            <ChakraProvider>
                <Box minH="100vh">
                    <RouterProvider router={router} />

                </Box>
            </ChakraProvider>
        </Provider>
    </AuthProvider>
}

export default Providers;