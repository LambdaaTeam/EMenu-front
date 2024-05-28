import { useState, useEffect } from 'react';
import { FormControl, Container, FormLabel, Input, Text, Button, Box, useToast } from '@chakra-ui/react';
import { IMaskInput } from 'react-imask';
import axios from 'axios';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useTable } from '../../hooks/tableContext.jsx';

const Login = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setTableNumber, setTableId, setRestaurantId, setClient } = useTable();
  const { restaurantId } = useParams();
  const tableNumber = searchParams.get('table');
  const tableId = searchParams.get('table_id');

  useEffect(() => {
    setTableNumber(tableNumber);
    setTableId(tableId);
    setRestaurantId(restaurantId);
  }, [tableNumber, tableId, restaurantId, setTableNumber, setTableId, setRestaurantId]);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`https://api.emenu.psykka.xyz/api/v1/restaurants/${restaurantId}/tables/${tableId}`, {
        name,
        cpf,
      });

      if (response.status === 200) {
        const data = response.data;
        setClient({ name, cpf });
        localStorage.setItem('client_token', data.token);
        toast({
          title: `Seja bem vindo, ${name}!`,
          status: 'success',
          duration: 5000,
        });
        navigate('/menu');
      }
    } catch (error) {
      toast({
        title: 'Erro!',
        description: 'Não foi possível realizar o login, tente novamente.',
        status: 'error',
        duration: 3000,
      });
    }
  }

  return (
    <Container h='100vh' d='flex' alignItems='center' justifyContent='center' >
      <Box display='flex' h='100%' flexDirection='column' alignItems='center' justifyContent='space-between'>
        <Box alignSelf='flex-start' mt='32'>
          <Text fontSize='2xl' fontWeight='bold' as='h1'>
            Bem-vindo,
          </Text>
          <Text fontSize='2xl' fontWeight='bold' as='h2'>
            Que bom ver você!
          </Text>
        </Box>
        <Box as='form' w='100%' mb='32' onSubmit={handleLogin}>
          <FormControl display='flex' flexDirection='column' w='100%' gap='2'>
            <FormLabel>Nome Completo*</FormLabel>
            <Input type='text' placeholder='Insira seu nome completo' value={name} onChange={(e) => setName(e.target.value)} required />
            <FormLabel>CPF*</FormLabel>
            <Input
              as={IMaskInput}
              mask="000.000.000-00"
              value={cpf}
              onAccept={(value) => setCpf(value)}
              placeholder='Insira seu CPF'
              required
            />
            <Button colorScheme='red' type='submit' w='100%'>
              Entrar
            </Button>
          </FormControl>
        </Box>
        <Text color='gray.500' p='4'>
          E-Menu solution
        </Text>
      </Box>
    </Container>
  );
};

export default Login;
