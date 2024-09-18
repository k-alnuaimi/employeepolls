import { Box, Button, HStack, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react"
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from "../AuthContext"
import { useEffect } from "react"

function Home() {


    const { user: authenticatedUser, logout } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()


    useEffect(() => {
        tabsIndex()

    }, [location.pathname])

    const tabsIndex = () => {

        switch (location.pathname) {
            case "/questions":
                return 0
            case "/leaderboard":
                return 1
            case "/add":
                return 2
        }
        return 0

    }


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


            <Tabs mb="5" index={tabsIndex} variant="line" >
                <TabList >
                    <Tab onClick={() => navigate("/questions")}>Questions</Tab>
                    <Tab onClick={() => navigate("/leaderboard")}>Leaderbord</Tab>
                    <Tab onClick={() => navigate("/add")}>New</Tab>
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