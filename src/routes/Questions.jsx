import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react"
import Question from "../components/Question"
import { useSelector } from "react-redux"
import TitleText from "../components/TitleText"
import { useAuth } from "../AuthContext"
import { useEffect } from "react"

function Questions() {
    /* const authenticatedUser = useSelector((state) => state.users.users[authenticatedUser]) */
    const { user: authenticatedUser } = useAuth()
    const allQuestions = useSelector((state) => state.questions.questions)

    console.log(allQuestions)
    console.log(authenticatedUser)
    const newQuestions = Object.values(allQuestions).filter(question => !Object.keys(authenticatedUser.answers).includes(question.id))
    const answeredQuestions = Object.values(allQuestions).filter(question => Object.keys(authenticatedUser.answers).includes(question.id))




    return <Box gap="10px" display="flex" flexDir="column" w="95%" >

        <Box borderRadius="5px" borderWidth="1px" borderColor="gray" p="30px" pt="5px" >

            <TitleText >New Questions</TitleText>
            <Divider w="100%" mb="40px" />

            <SimpleGrid minChildWidth="200px" >
                {Object.values(newQuestions).map(question => <Question question={question} key={question.id} />)}
            </SimpleGrid>
        </Box>

        <Box borderRadius="5px" borderWidth="1px" borderColor="gray" p="30px" pt="5px">
            <TitleText>Done</TitleText>
            <Divider w="100%" mb="40px" />
            <SimpleGrid minChildWidth="200px"  >
                {Object.values(answeredQuestions).map(question => <Question question={question} key={question.id} />)}
            </SimpleGrid>
        </Box>
    </Box>
}

export default Questions