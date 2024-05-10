import { Stack, Box, Text, Heading, FormLabel, FormControl, Checkbox, Input, Button, Image } from '@chakra-ui/react'
// import FlipCard from 'react-flipcard';
// import { useState } from 'react';

const Login = () => {
    // const [isFlipped, setIsFlipped] = useState(false);
    // const showBack = () => {
    //     setIsFlipped(true);
    //   };
    
    //   const showFront = () => {
    //     setIsFlipped(false);
    //   };
    
    //   const handleOnFlip = (flipped) => {
    //     if (flipped) {
    //       // Foca no botão de voltar
    //       // (você pode usar useRef para obter a referência)
    //     }
    //   };
    
    //   const handleKeyDown = (e) => {
    //     if (isFlipped && e.keyCode === 27) {
    //       showFront();
    //     }
    //   };
    
    return (
        <Stack display="flex" direction="row" >
            <Stack bg="#50000E" color="white" w="50%" h="100vh" p="15vh">
                <Heading fontSize="60px" fontWeight="bold" > Bem-vindo á nossa comunidade</Heading>
                <Text> O E-menu Solution fornece o melhor sistema necessário
                    para administrar o seu estabelecimento </Text>
            </Stack>
            {/* <FlipCard
          disabled={true}
          flipped={isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}
        > */}
             <Stack h="100vh" textAlign="center" marginLeft="23vh" >
                <Box w="500px">
                    <Image src='/logoEmenu.jpg' left="72px" top="22px" />
                    <Heading marginTop="65px" > E-Menu Solution </Heading>
                    <Text marginTop="45px" textAlign="justify" > O E-menu Solution fornete o melhor sistema necessário
                        para administrar o seu estabelecimento
                    </Text>

                    <FormControl marginTop="45px">
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
                    <Button marginTop="45px"
                        bg="#B6001F"
                        color="white"
                        _hover={"#B6001F"}
                        w="480px"
                        // onClick={this.showBack}
                        >

                        Continue
                    </Button>
                </Box>
            </Stack>

            <Stack h="100vh" textAlign="center" marginLeft="128vh" position="absolute">
                <Box w="500px">
                    <Image src='/logoEmenu.jpg' left="72px" top="22px" />
                    <Heading marginTop="65px" > E-Menu Solution </Heading>
                    <Text marginTop="45px" textAlign="justify" > O E-menu Solution fornete o melhor sistema necessário
                        para administrar o seu estabelecimento
                    </Text>
                    <Text fontWeight="bold" marginTop="4vh"> Criar perfil para Administrador </Text>
                    <FormControl marginTop="45px">
                        <FormLabel> Nome do usuário </FormLabel>
                        <Input placeholder='Insira o nome do usuário' />
                        <FormLabel> Senha do administrador </FormLabel>
                        <Input placeholder='Insira uma senha aqui' />
                        <FormLabel> Confirme a senha do administrador </FormLabel>
                        <Input placeholder='Confirme sua senha aqui' />
                    </FormControl>
                    <Checkbox defaultChecked textAlign="center" justifyItems="center" marginLeft="-7vh" marginTop="2vh"> Concordo com os termos de uso e política de privacidade </Checkbox>
                    <Button marginTop="45px"
                        bg="#B6001F"
                        color="white"
                        _hover={"#B6001F"}
                        w="480px">

                        Criar conta
                    </Button>
                </Box>
            </Stack>
            {/* </FlipCard> */}
            
        </Stack>
    )
}

export default Login