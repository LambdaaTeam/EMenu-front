import { useState, useEffect } from 'react';
import { Stack, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import CardsDetails from './components/Cards/CardsDetails.jsx';
import Header from './components/Header/Header';
import Menu from './components/Header/Menu';
import { useCart } from './hooks/Cart';
import Cart from './components/Cart/Cart';
import { useTable } from './hooks/tableContext.jsx';

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart } = useCart();
  const token = localStorage.getItem('client_token');
  const { restaurantId } = useTable();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    const fetchMenu = async () => {
      try {
        const response = await axios.get(`https://api.emenu.psykka.xyz/api/v1/restaurants/${restaurantId}/menu`);
        setMenu(response.data);
      } catch (error) {
        console.error('Error fetching the menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [token, restaurantId]);

  const toggleDetails = () => setShowDetails(!showDetails);

  if (loading) {
    return (
      <GetApp>
        <Spinner size="xl" />
      </GetApp>
    );
  }

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
      {menu && (
        <>
          <Header title={menu.restaurant} />
          <Menu menu={menu} toggleDetails={toggleDetails} />
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
