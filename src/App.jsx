import { Box, Button, Select, Text, useRangeSlider, VStack } from '@chakra-ui/react'

import {ChevronDownIcon} from '@chakra-ui/icons'

import "../src/_DATA"
import { users } from '../src/_DATA'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function App() {

  const usersArr = Object.values(users)
  const [selectedUser,setSelectUser] = useState("")
  const [loginErrorMessageVisible,setLoginErrorMessageVisible] = useState(false)
  const navigate = useNavigate();

  const onChangeUser = (e)=>{

    setSelectUser(e.target.value)
    setLoginErrorMessageVisible(false)

  }
  const handleLoginButton = ()=>{

    if (selectedUser == ""){
      setLoginErrorMessageVisible(true)
    }else{
      setLoginErrorMessageVisible(false)
      navigate("/Root",{replace:true,state:{selectedUser}})

    }

  }

  return (
    <Box>
      <VStack >
      <Select w="45%"placeholder='Select a user' onChange={onChangeUser} icon={<ChevronDownIcon />}>
        {usersArr.map(user=><option value={user.id} key={user.id}>{user.id}</option>)}
      </Select>
      <Button onClick={handleLoginButton}>Login</Button>
      {loginErrorMessageVisible && <Text color="red">Please Select a User</Text>}
      </VStack>

    </Box>
  )
}

export default App
