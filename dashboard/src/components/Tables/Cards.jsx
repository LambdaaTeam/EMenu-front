import {
  Card, CardHeader, Link, Box, Heading, 
  CardBody, Text, GridItem, theme, HStack
} from "@chakra-ui/react";
import { ArrowForwardIcon, SmallCloseIcon, ChatIcon } from '@chakra-ui/icons'
import { UserRound } from "lucide-react";
import Clients from "./Clients";
/**
 * display the table cards
 * @param {string} status - table status
 * @returns {JSX.Element} - table card
 */
const Cards = ({ status }) => {
  const colors = {
    AVAILABLE: theme.colors.green[400],
    RESERVED: theme.colors.gray[400],
    OCCUPIED: theme.colors.yellow[400],
  }

  const color = colors[status]

  return (
    <Link to= "./Clients" _hover={"none"}> 
    <GridItem>
      <Card textAlign="left" borderRadius="16" borderRight="20px solid" borderColor={color}>
        <CardHeader display="flex" justifyContent="space-between" alignItems="center">
          <Heading fontSize="2xl" color={color}> {status} </Heading>
          <Text color={color} fontSize="xl" fontWeight="bold" > 01 </Text>
        </CardHeader>
        <CardBody>
          <Box display="flex" spacing="4" alignItems="center" gap={2}>
            <UserRound />
            <Text> 0 </Text>
          </Box>
        </CardBody>
      </Card> 
    </GridItem>
    </Link>
  )
}

export default Cards