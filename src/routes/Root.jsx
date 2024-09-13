import { Box, Link as ChakraLink, HStack, Image, Text } from "@chakra-ui/react"
import { Navigate, Outlet, Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Questions from "./Questions"
import { useSelector } from "react-redux"
import { useAuth } from "../AuthContext"

function Root() {


    const { user: authenticatedUser } = useAuth()

    console.log(authenticatedUser)

    if (authenticatedUser == null) {
        return <Navigate to="/Login" />
    }


    return (

        <Box>

            <HStack m="5px" spacing={2}>
                <Image src={authenticatedUser.avatarURL} boxSize="10" />
                <Text>{authenticatedUser.id}</Text>
                <ChakraLink as={ReactRouterLink} to='/'>
                    Logout
                </ChakraLink>

            </HStack>


            <Tabs>
                <TabList>
                    <Tab >Questions</Tab>
                    <Tab>Leaderbord</Tab>
                    <Tab>New</Tab>
                </TabList>



                {/* <TabPanels>
                    <TabPanel minH="100vh" >
                        <Questions authenticatedUser={location.state.selectedUser} />
                    </TabPanel>
                    <TabPanel>
                        <p>Leaderbord</p>
                    </TabPanel>
                    <TabPanel>
                        <p>New</p>
                    </TabPanel>
                </TabPanels> */}
            </Tabs>
            <Outlet />


        </Box>
    )

}

export default Root