import {
  Card, CardHeader, ButtonGroup, Box, Heading, PopoverTrigger,
  PopoverContent, Popover, PopoverHeader, PopoverArrow, PopoverCloseButton,
  PopoverBody, CardBody, CardFooter, CloseButton, Divider, Button, Text
} from "@chakra-ui/react";
import { ArrowForwardIcon, SmallCloseIcon, ChatIcon } from '@chakra-ui/icons'
import { IoChatbubbleOutline, IoTimeSharp } from "react-icons/io5";

const formatDate = (date) => {
  const day = date.getDay().toString().padStart(2, '0')
  const mounth = date.getMonth().toString().padStart(2, '0')
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${day}/${mounth} ${hours}:${minutes}`
}

const CardPedido = ({ info }) => {
 
  return (
    <Card textAlign="left" bg="white" m="12" p='16' borderRadius="16">
      <CardHeader>
        <Heading size='md' my='2'>{info.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text> Mesa: {info.table} </Text>
        <Text> Cliente: {info.client} </Text>
        <Text> Observações: {info.obs} </Text>
      </CardBody>
      <CardFooter display="flex" justifyContent="space-between" >
        <Box>
          <IoTimeSharp color="9E0000" /> {formatDate(info.date)}
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