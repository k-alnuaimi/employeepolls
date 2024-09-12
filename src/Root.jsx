import { Box, Link as ChakraLink, HStack } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Root() {

    return (
        <Box>
            <HStack m="5px" >
                <ChakraLink as={ReactRouterLink} to='/Login'>
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