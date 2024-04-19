import { Text, Stack, Box, Image, Badge } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

const Header = () => {
    return (
        <Stack w="full" h="72" display="flex" direction="row"  justifyContent="space-between" >
            <Box> 
            <Image src='/logoEmenu.jpg' w="30px" h="30px" position="absolute" left="72px" top="22px"/>
            <Text fontSize="20px" marginLeft="102"> E-Menu Solution </Text>
            </Box>
            <Box marginTop="auto" marginBottom="auto" pr="55" >
                <BellIcon boxSize={25} color="black" />
                <Badge bg="#9E0000" position="absolute"
                 top="29px" right="49px" boxSize={18} 
                 borderRadius="100px" mr="10"> 
                 <Text color="white" position="absolute"
                 top="-14px" right="5px"> 4 </Text>
                 </Badge> 
            </Box>
        </Stack>
    )
}

export default Header