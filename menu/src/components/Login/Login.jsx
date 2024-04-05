import { FormControl, Container, FormLabel, Input, Text, Checkbox, Button, Box } from '@chakra-ui/react'

const Login = () => {
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
        <Box as='form' w='100%' mb='32'>
          <FormControl display='flex' flexDirection='column' w='100%' gap='2'>
            <FormLabel>Nome Completo *</FormLabel>
            <Input type='email' placeholder='Enter email' />
            <FormLabel>CPF *</FormLabel>
            <Input type='email' placeholder='Enter email' />
            <Checkbox colorScheme='red'>Lembre de mim</Checkbox>
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

  )
}

export default Login