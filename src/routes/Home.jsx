import { Box, Button, HStack, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react"
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from "../AuthContext"

function Home() {


    const { user: authenticatedUser, logout } = useAuth()
    const navigate = useNavigate()


    return (

        <Box>

            <HStack m="5px" spacing={2}>
                <Image src={authenticatedUser.avatarURL} boxSize="10" />
                <Text>{authenticatedUser.id}</Text>
                <Button onClick={() => {

                    logout()
                    navigate("/")

                }}>
                    Logout
                </Button>

            </HStack>


            <Tabs mb="5">
                <TabList>
                    <Tab onClick={() => navigate("/questions")}>Questions</Tab>
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

export default Home