import { Box, Text, Button, VStack, Divider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const QuestionOptionBox = ({ questionOption, user, noOfUsers, isAnswered, handleOptionClick, optionName }) => {


    const showQuestionOptions = () => {

        console.log(isAnswered)

        if (questionOption.votes.includes(user.id)) {
            return <Text>You chose this option</Text>
        } else if (!isAnswered) {
            return <Button
                width="100%"
                colorScheme="teal"
                borderTopRadius={0}
                height="50px"
                onClick={() => handleOptionClick(optionName)}
            >
                Click
            </Button>
        }


    }




    return (
        <Box maxWidth="400px" borderWidth="1px" borderRadius="lg" overflow="hidden" p={1}>
            <Text
                p={4}
                fontWeight="bold"
                fontSize="md"
                textAlign="center"
            >
                {questionOption.text}
            </Text>
            <Divider />
            <VStack spacing={2} divider={<Divider color="black" />}>

                {
                    showQuestionOptions()
                }

                <Text>{questionOption.votes.length} chose this option</Text>
                <Text>{Math.floor((questionOption.votes.length / noOfUsers) * 100)} % chose this option</Text>
            </VStack >
        </Box >
    )

}

export default QuestionOptionBox;