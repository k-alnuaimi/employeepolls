import { Box, Divider, SimpleGrid, Switch } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useAuth } from "../AuthContext"
import Question from "../components/Question"
import TitleText from "../components/TitleText"

function Questions() {
    const { user: authenticatedUser } = useAuth()
    const allQuestions = useSelector((state) => state.polls.questions)
    const [answeredCheck, setAnsweredCheck] = useState(true)
    const dispatch = useDispatch()


    const newQuestions = useSelector((state) => state.polls.newQuestions)
    const answeredQuestions = useSelector((state) => state.polls.answeredQuestions)




    return <Box gap="10px" display="flex" flexDir="column" w="95%" >

        <Switch defaultChecked onChange={() => setAnsweredCheck(!answeredCheck)}>Show Answered</Switch >

        <Box borderRadius="5px" borderWidth="1px" borderColor="gray" p="30px" pt="5px" >

            <TitleText >New Questions</TitleText>
            <Divider w="100%" mb="40px" />

            <SimpleGrid columns={4} >
                {newQuestions.map(question => <Question question={question} key={question.id} />)}
            </SimpleGrid>
        </Box>

        {
            answeredCheck && <Box borderRadius="5px" borderWidth="1px" borderColor="gray" p="30px" pt="5px">
                <TitleText>Done</TitleText>
                <Divider w="100%" mb="40px" />
                <SimpleGrid columns={4} >
                    {answeredQuestions.map(question => <Question question={question} key={question.id} />)}
                </SimpleGrid>
            </Box>
        }


    </Box>
}

export default Questions