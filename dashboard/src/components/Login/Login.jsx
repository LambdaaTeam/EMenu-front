import { Stack, Box, Text, Heading, FormLabel, FormControl, Checkbox, Input, Button, Image, VStack } from '@chakra-ui/react'
import { useState } from 'react'



const Login = () => {
    const [createAdminAccount, setCreateAdminAccount] = useState(false)

    return (
        <Stack display="flex" direction="row" h="100vh" w="100vw" >
            <Stack bg="#50000E" color="white" alignItems={'center'} padding={32} textAlign='center' spacing={0}>
                <Heading fontWeight="bold" >
                    Bem-vindo a nossa comunidade
                </Heading>
                <Text> O E-menu fornece o melhor sistema necessário
                    para administrar o seu estabelecimento </Text>
            </Stack>
            <Stack px={32} mt={32} alignItems={'center'} textAlign='center' w="100%">
                <VStack w='70%' spacing={8}>
                    <VStack spacing={2}>
                        <Heading> E-Menu </Heading>
                        <Text>
                            O E-menu sistema para administrar o cardápios do seu estabelecimento
                        </Text>
                    </VStack>

                    {!createAdminAccount ? (
                        <>
                            <FormControl>
                                <FormLabel> Nome do Estabelecimento </FormLabel>
                                <Input placeholder='Escreva o nome do estabelecimento' />
                                <FormLabel> E-mail </FormLabel>
                                <Input placeholder='email@empresa.com' />
                                <FormLabel> Número de telefone </FormLabel>
                                <Input placeholder='(00)0000-0000' />
                                <FormLabel> Senha </FormLabel>
                                <Input placeholder='Insira uma senha aqui' />
                                <FormLabel> Confirme a senha</FormLabel>
                                <Input placeholder='Confirme sua senha aqui' />
                                <FormLabel> Nome do Estabelecimento </FormLabel>
                                <Input placeholder='Escreva o nome do estabelecimento' />
                            </FormControl>
                            <Button
                                bg="#B6001F"
                                color="white"
                                _hover={"#B6001F"}
                            >
                                Continue
                            </Button>
                        </>
                    ) : (
                        <>
                            <FormControl>
                                <FormLabel> Nome do usuário </FormLabel>
                                <Input placeholder='Insira o nome do usuário' />
                                <FormLabel> Senha do administrador </FormLabel>
                                <Input placeholder='Insira uma senha aqui' />
                                <FormLabel> Confirme a senha do administrador </FormLabel>
                                <Input placeholder='Confirme sua senha aqui' />
                            </FormControl>
                            <Checkbox defaultChecked> Concordo com os termos de uso e política de privacidade </Checkbox>
                            <Button
                                bg="#B6001F"
                                color="white"
                                _hover={"#B6001F"}
                                onClick={() => setCreateAdminAccount(false)}
                            >
                                Criar conta
                            </Button>
                        </>
                    )}
                </VStack>
            </Stack>
        </Stack >
    )
}

export default Login