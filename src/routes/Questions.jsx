import { Box, Checkbox, Divider, SimpleGrid, Switch, Text } from "@chakra-ui/react"
import Question from "../components/Question"
import { useDispatch, useSelector } from "react-redux"
import TitleText from "../components/TitleText"
import { useAuth } from "../AuthContext"
import { useEffect, useState } from "react"
import { saveUserQuestion } from "../features/usersSlice"

function Questions() {
    /* const authenticatedUser = useSelector((state) => state.users.users[authenticatedUser]) */
    const { user: authenticatedUser } = useAuth()
    const allQuestions = useSelector((state) => state.questions.questions)
    const [answeredCheck, setAnsweredCheck] = useState(true)
    const dispatch = useDispatch()


    const newQuestions = useSelector((state) => state.questions.newQuestions)
    const answeredQuestions = useSelector((state) => state.questions.answeredQuestions)


    dispatch(saveUserQuestion({ question_id: newQuestions[0].id }))


    return <Box gap="10px" display="flex" flexDir="column" w="95%" >

        <Switch defaultChecked onChange={() => setAnsweredCheck(!answeredCheck)}>Show Answered</Switch >

        <Box borderRadius="5px" borderWidth="1px" borderColor="gray" p="30px" pt="5px" >

            <TitleText >New Questions</TitleText>
            <Divider w="100%" mb="40px" />

            <SimpleGrid minChildWidth="200px" >
                {newQuestions.map(question => <Question question={question} key={question.id} />)}
            </SimpleGrid>
        </Box>

        {
            answeredCheck && <Box borderRadius="5px" borderWidth="1px" borderColor="gray" p="30px" pt="5px">
                <TitleText>Done</TitleText>
                <Divider w="100%" mb="40px" />
                <SimpleGrid minChildWidth="200px"  >
                    {answeredQuestions.map(question => <Question question={question} key={question.id} />)}
                </SimpleGrid>
            </Box>
        }


    </Box>
}

export default Questions