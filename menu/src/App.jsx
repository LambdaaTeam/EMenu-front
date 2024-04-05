import CardsDetails from './components/Cards/CardsDetails.jsx'
import Cart from './components/Cart/Cart.jsx'
import Header from './components/Header/Header'
import Menu from './components/Header/Menu'
import { useState } from 'react'
import { Stack } from '@chakra-ui/react'

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <Stack h="100vh" w="100vw" spacing={0}>
      {/* {showDetails ? <CardsDetails toggleDetails={toggleDetails} /> : (<> <Header /> <Menu toggleDetails={toggleDetails} /> </>)} */}
      <Cart/>
    </Stack>
  )
}

export default App
