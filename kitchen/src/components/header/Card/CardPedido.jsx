import {
  Card, CardHeader, ButtonGroup, Box, Heading, PopoverTrigger,
  PopoverContent, Popover, PopoverHeader, PopoverArrow, PopoverCloseButton,
  PopoverBody, CardBody, CardFooter, CloseButton, Divider, Button, Text
} from "@chakra-ui/react";
import { ArrowForwardIcon, SmallCloseIcon, ChatIcon } from '@chakra-ui/icons'
import { IoChatbubbleOutline, IoTimeSharp } from "react-icons/io5";
import { useState } from "react";



const CardPedido = () => {
 
  return (
    <Card textAlign="left" bg="white" w="480px" h="180px" maxW="auto" mx="auto" p="15px" marginTop="25px" borderRadius="16px">
      <CardHeader display="flex" flexDirection="row" >
        <Heading size='md'> Pizza de frango </Heading>
        <Popover placement='top-start'>
          <PopoverTrigger>
            <Button
              position="absolute"
              right="50"
              top="50"
              _hover={{ bg: "#EEEFF1" }}
              _active={{ bg: "transparent" }}
              _focus={{ boxShadow: "none" }}
              p={0}
              cursor={"pointer"}
              flexDirection="right"
              h={"10%"}
              border="none"
              bg={"#EEEFF1"}
              borderRadius={"100px"}
              m={0}>  <IoChatbubbleOutline /> </Button>
          </PopoverTrigger>
          <PopoverContent border="1px solid gray" h="95px" w="155px" borderRadius="md" bg="white">
            <Box display="flex" p="5px" justifyContent="space-between">
              <PopoverHeader fontWeight='semibold'>Observações: </PopoverHeader>

              <PopoverArrow />
              <PopoverCloseButton w="10px" border="none" bg="transparent" textAlign="right" />
            </Box>
            <Divider bg="red" borderWidth="2px" orientation="horizontal" />
            <PopoverBody p="5px">
              Blá blá blá
            </PopoverBody>

          </PopoverContent>
        </Popover>

      </CardHeader>
      <CardBody>
        <Text> Mesa: </Text>
        <Text> Cliente: </Text>

      </CardBody>
      <CardFooter display="flex" justifyContent="space-between" >
        <Box>
          <IoTimeSharp color="9E0000" /> 19:30
        </Box>
        <ButtonGroup  >
          <Button bg="#EEEFF1"
            w="56px" borderRadius="8px"
            border="transparent"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.2);"
            cursor={"pointer"}>
            <SmallCloseIcon color="#898D90" /> </Button>
          <Button w="68px" bg="white"
            borderRadius="8px" border="transparent"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.2);"
            cursor={"pointer"} >
            <ArrowForwardIcon color="#9E0000" /> </Button>
        </ButtonGroup >
      </CardFooter>
    </Card>
  )
}

export default CardPedido