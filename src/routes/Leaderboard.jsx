import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";


const Leaderbord = () => {

    const users = Object.values(useSelector(state => state.users.users))
    console.log(users)

    users.sort((a, b) => {
        const aTotal = a.questions.length + Object.keys(a.answers).length
        const bTotal = b.questions.length + Object.keys(b.answers).length

        return bTotal - aTotal
    })
    return <>
        <TableContainer>
            <Table variant="simple">
                <TableCaption>Leaderboard</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Users</Th>
                        <Th isNumeric>Answered</Th>
                        <Th isNumeric>Created</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        users.map(user => {

                            return <Tr key={user.id}>
                                <Td>{user.id}</Td>
                                <Td>{Object.keys(user.answers).length}</Td>
                                <Td>{user.questions.length}</Td>

                            </Tr>
                        })
                    }

                </Tbody>

            </Table>

        </TableContainer>
    </>
}

export default Leaderbord;