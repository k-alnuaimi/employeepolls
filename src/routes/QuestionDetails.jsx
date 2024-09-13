import { Box, Text } from "@chakra-ui/react";


const QuestionDetails = (question) => {

    return <Box>
        <Text>{question.author}</Text>
    </Box>


}

export default QuestionDetails;