import { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import CardsDetails from './components/Cards/CardsDetails.jsx';
import Header from './components/Header/Header';
import Menu from './components/Header/Menu';
import { useCart } from './hooks/Cart';
import Cart from './components/Cart/Cart';
import { useTable } from './hooks/tableContext.jsx';

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const { cart } = useCart();
  const { table } = useTable();
  const toggleDetails = () => setShowDetails(!showDetails);

  if (showDetails) {
    return (
      <GetApp>
        <CardsDetails toggleDetails={toggleDetails} />
      </GetApp>
    );
  }

  if (cart.displaying) {
    return (
      <GetApp>
        <Cart />
      </GetApp>
    );
  }
  
  return (
    <GetApp>
      {table.menu && (
        <>
          <Header title={table.restaurantName} />
          <Menu menu={table.menu} toggleDetails={toggleDetails} />
        </>
      )}
    </GetApp>
  );
}

function GetApp({ children }) {
  return (
    <Stack h="100vh" direction="column" spacing={0}>
      {children}
    </Stack>
  );
}

export default App;
