import { Button } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'

const ButtonAdd = () => {
  return (
    <Button marginTop="25px" w="40px" h="40px" 
    bg="white" borderRadius="100px" border="transparent" 
    boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.2);" cursor={"pointer"} >
   <AddIcon color="#9E0000"/> 
   </Button>
  )
}

export default ButtonAdd