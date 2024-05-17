import { Grid, Link, GridItem, Text, Button, Card, VStack, HStack, Box, Icon } from "@chakra-ui/react";
import Cards from "../Tables/Cards";
import Clients from "../Tables/Clients";
import Payments from "../Tables/Payments";

const Table = () => {
  return (
    <VStack align="stretch" spacing={4} p={4}>
      <HStack align="center" justify="center">
        <Icon
          boxSize='2'
          viewBox='0 0 200 200'
          color='#45D043'
          alignSelf='center'
        >
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
        <Text fontSize='md'> Vazio </Text>
        <Icon
          boxSize='2'
          viewBox='0 0 200 200'
          color='yellow.400'
          alignSelf='center'
        >
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
        <Text fontSize="md"> Ocupado </Text>
        <Icon
          boxSize='2'
          viewBox='0 0 200 200'
          color='gray.400'
          alignSelf='center'
        >
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
        <Text fontSize="md"> Reservado </Text>
      </HStack>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
       <Cards status="AVAILABLE"/> 
          <Cards status="OCCUPIED"/>
          <Cards status="RESERVED"/>
          <Cards status="AVAILABLE"/>
          <Cards status="OCCUPIED"/>
          <Cards status="RESERVED"/>
          <Cards status="AVAILABLE"/>
          <Cards status="OCCUPIED"/>
          <Cards status="RESERVED"/>
      </Grid>

      {/* <Clients/> */}
      {/* <Payments/> */}
    </VStack>
  )
}

export default Table