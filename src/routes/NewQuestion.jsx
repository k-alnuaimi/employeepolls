import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveQuestion } from "../features/questionsSlice";
import { useAuth } from "../AuthContext";
import { saveUserQuestion } from "../features/usersSlice";
import { useNavigate } from "react-router-dom";


const NewQuestion = () => {

    const [firstOption, setFirstOption] = useState("")
    const [secondOption, setSecondOption] = useState("")
    const { user } = useAuth()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = () => {
        const newQuestion = dispatch(saveQuestion({ optionOneText: firstOption, optionTwoText: secondOption, author: user.id }))
        navigate("/questions")


    }


    return <Box display="flex" alignItems="center" flexDir="column">

        <Text size="lg" fontWeight="bold">Would you Rather</Text>
        <Text color="gray">First Option</Text>
        <Input value={firstOption} onChange={(e) => setFirstOption(e.target.value)} />
        <Text color="gray">Second Option</Text>
        <Input value={secondOption} onChange={(e) => setSecondOption(e.target.value)} />
        <Button isDisabled={!(!!secondOption && !!firstOption)} onClick={handleSubmit}>Submit</Button>

    </Box>
}
export default NewQuestion;