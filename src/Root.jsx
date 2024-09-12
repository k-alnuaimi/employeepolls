import { Box, Link as ChakraLink, HStack } from "@chakra-ui/react"
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Root() {

    const location = useLocation() 

    console.log(location.state)

    return (
        <Box>
                  Hello  {location.state.selectedUser}   
            <HStack m="5px" >
                <ChakraLink as={ReactRouterLink} to='/'>
                    Logout
                </ChakraLink>
          
            </HStack>

            <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>


        </Box>
    )

}

export default Root