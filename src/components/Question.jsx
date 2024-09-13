import { Box, Button, Text } from "@chakra-ui/react";

const Question = ({ question }) => {

    const date = new Date(question.timestamp)
    const hours = date.getHours()
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()

    const onClickShowHandler = () => {



    }

    return (
        <Box
            borderColor="gray"
            borderWidth="1px"
            borderRadius="5"
            p="7"
            w="300px"
            display="flex"
            flexDir="column"
            alignItems="center"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"

        >
            <Box mb="10px" display="flex" alignItems="center" justifyContent=" space-between" flexDir="column">
                <Text color="black" fontWeight="bold" textAlign="center" >{question.author}</Text>
                <Text color="gray" textAlign="center" >{hours}:{minutes} | {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
            </Box>

            <Button
                onClick={onClickShowHandler}
                width="full"
                bg="gray.100"
                color="green.500"
                borderWidth="1px"
                borderColor="gray.300"
                _hover={{ bg: 'gray.200' }}>Show</Button>
        </Box>
    )

}

export default Question;