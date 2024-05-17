import {
  Card, CardHeader, ButtonGroup, Box, Heading, PopoverTrigger,
  PopoverContent, Popover, PopoverHeader, PopoverArrow, PopoverCloseButton,
  PopoverBody, CardBody, CardFooter, CloseButton, Divider, Button, Text
} from "@chakra-ui/react";

const CardClient = () => {
  return (
    <Card textAlign="left" bg="white" m="12" p='16' borderRadius="16">
      <CardHeader>
        <Heading size='md' my='2'> Kauan Boaro </Heading>
      </CardHeader>
      <CardBody>
        <Text> 123.123.123-02</Text>
      </CardBody>
    </Card>
  )
}

export default CardClient