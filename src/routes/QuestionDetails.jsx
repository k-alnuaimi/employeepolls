import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext";
import QuestionOptionBox from "../components/QuestionBox";
import { saveQuestionAnswer, setAnsweredQuestions, setNewQuestions } from "../features/questionsSlice";
import { saveUserAnswer } from "../features/usersSlice";


const QuestionDetails = () => {

    const { question_id } = useParams();
    const { user, login } = useAuth()
    const questions = useSelector((state) => state.questions.questions)
    const answeredQuestions = useSelector((state) => state.questions.answeredQuestions)
    const newQuestions = useSelector((state) => state.questions.newQuestions)
    const allUsers = useSelector((state) => state.users.users)
    const noOfUsers = Object.keys(allUsers).length
    const question = questions[question_id]
    const isAnswered = question.optionOne.votes.includes(user.id) || question.optionTwo.votes.includes(user.id)

    const dispatch = useDispatch()

    const handleOptionClick = (option) => {

        dispatch(saveQuestionAnswer({ qid: question_id, answer: option, authedUser: user.id }))
        dispatch(saveUserAnswer({ qid: question_id, answer: option, authedUser: user.id }))

        dispatch(setAnsweredQuestions([...answeredQuestions, questions[question_id]]))
        console.log(newQuestions)
        dispatch(setNewQuestions(newQuestions.filter(q => q.id != question_id)))
        login(allUsers[user.id])

    }

    return <Box minH="100vh" p="2" alignItems="center" display="flex" flexDir="column">
        <Text fontWeight="bold" textAlign="center" mb="300" fontSize="30">Poll by {question.author}</Text>
        <Text textAlign="center" fontWeight="bold" fontSize="20">Would You Rather</Text>

        <HStack mt="10" spacing="10">
            <QuestionOptionBox user={user} questionOption={question.optionOne} noOfUsers={noOfUsers} isAnswered={isAnswered} optionName="optionOne" handleOptionClick={handleOptionClick} />
            <QuestionOptionBox user={user} questionOption={question.optionTwo} noOfUsers={noOfUsers} isAnswered={isAnswered} optionName="optionTwo" handleOptionClick={handleOptionClick} />
        </HStack>
    </Box>


}

export default QuestionDetails;