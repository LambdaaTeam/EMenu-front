import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import Card from "../Card/CardPedido";
import ButtonAdd from "./ButtonAdd";

const Body = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" textAlign="center" bg="#EBF1F1" height="100vh">
          <GridItem height="100%">
            <Card />
            <Card />
            <Card />
            <ButtonAdd/>
           
            </GridItem>
          <GridItem height="100%">
          <Card />
          
            <ButtonAdd/>

          </GridItem>
          <GridItem height="100%">
            <Card />
            <ButtonAdd/>
          </GridItem>
        </Grid>
  )
}

export default Body