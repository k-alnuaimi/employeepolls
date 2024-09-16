import { Box, Button, Select, Text, useRangeSlider, VStack } from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../AuthContext'



function Login() {


  const { login } = useAuth()

  const usersArr = /* Object.values(users) */ Object.values(useSelector((state) => state.users.users))
  const [selectedUser, setSelectedUser] = useState("")
  const [loginErrorMessageVisible, setLoginErrorMessageVisible] = useState(false)
  const navigate = useNavigate();


  const onChangeUser = (e) => {

    setSelectedUser(usersArr.find(user => user.id == e.target.value))
    setLoginErrorMessageVisible(false)

  }
  const handleLoginButton = () => {

    if (selectedUser == "") {
      setLoginErrorMessageVisible(true)
    } else {
      login(selectedUser)
      setLoginErrorMessageVisible(false)
      console.log("a")
      navigate("/questions", { replace: true })

    }

  }

  return (
    <Box>
      <VStack >
        <Select w="45%" placeholder='Select a user' onChange={onChangeUser} icon={<ChevronDownIcon />}>
          {usersArr.map(user => <option value={user.id} key={user.id}>{user.id}</option>)}
        </Select>
        <Button onClick={handleLoginButton}>Login</Button>
        {loginErrorMessageVisible && <Text color="red">Please Select a User</Text>}
      </VStack>

    </Box>
  )
}

export default Login
