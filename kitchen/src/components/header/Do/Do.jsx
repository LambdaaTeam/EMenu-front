import { Grid, GridItem, Text, Badge, Box, Stack } from "@chakra-ui/react";
import { CheckIcon, CheckCircleIcon } from '@chakra-ui/icons'
import Card from "../Card/CardPedido";
import ButtonAdd from "../Body/ButtonAdd"
import { useState } from "react";

const Do = () => {
  const [showCard, setShowCard] = useState(true);

  const handleButtonClick = () => {
    setShowCard(!showCard);
  };
  
  return (
    <Grid templateColumns="repeat(3, 1fr)" templateRows='repeat(1, 1fr)' textAlign="center">
      <GridItem bg="#F8D6D6">
        <Text color="#9E0000"> Pedido </Text>
      </GridItem>
      <GridItem bg="#F7F8D6">
        <Text color="#A2A503"> Fazendo </Text>
      </GridItem>
      <GridItem bg="#D6F8D7">
        <Box display="flex" flexDirection="row" justifyContent="center" textAlign="center">
          <CheckCircleIcon color="green" fontSize="18px" marginTop="15px" mr="10" />
          <Text color="#009E2F">
            Finalizado </Text>
        </Box>
      </GridItem>
      <Box textAlign="center" bg="#EFF5F5" height="100vh">
        <GridItem height="100%">
          <Card />
          <ButtonAdd/>
        </GridItem>
      </Box>

      <Box textAlign="center" bg="#EBF1F1" height="100vh">
        <GridItem height="100%">
          {/* <Card /> */}

        </GridItem>
      </Box>

      <Box textAlign="center" bg="#EFF5F5" height="100vh">
        <GridItem height="100%">
          {/* <Card /> */}

        </GridItem>
      </Box>

    </Grid>

  );
}

export default Do

