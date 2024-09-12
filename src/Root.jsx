import { Box, Link as ChakraLink, HStack, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Root() {

    const location = useLocation() 

    console.log(location.state)

    return (
        <Box>
                
            <HStack m="5px" spacing={10}>
            <Text> Hello  {location.state.selectedUser}   </Text> 
                <ChakraLink as={ReactRouterLink} to='/'>
                    Logout
                </ChakraLink>
              
            </HStack>

            <Tabs>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Leaderbord</Tab>
                    <Tab>New</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>Home</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Leaderbord</p>
                    </TabPanel>
                    <TabPanel>
                        <p>New</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>


        </Box>
    )

}

export default Root