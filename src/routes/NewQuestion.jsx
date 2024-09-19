import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { saveQuestion } from "../features/pollsSlice";


const NewQuestion = () => {

    const [firstOption, setFirstOption] = useState("")
    const [secondOption, setSecondOption] = useState("")
    const { user } = useAuth()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = () => {
        dispatch(saveQuestion({ optionOneText: firstOption, optionTwoText: secondOption, author: user.id }))
        // you should save question to user here 
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