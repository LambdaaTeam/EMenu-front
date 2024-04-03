import Login from './components/Login/Login'
import Header from './components/Header/Headerr'
import Menu from './components/Header/Menu'

import Home from './components/Home/Home'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <Container h='100vh' d='flex' alignItems='center' justifyContent='center'>
      <Login />
      <Header />
      <Menu />
    </Container>
  )
}

export default App
