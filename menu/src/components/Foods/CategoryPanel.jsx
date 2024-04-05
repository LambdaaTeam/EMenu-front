import { TabPanel, Text, Button } from '@chakra-ui/react'
import CardsDrinks from "../Cards/CardsDrinks"
import { useDetails } from '../../hooks/Details'

const CategoryPanel = ({ category, toggleDetails }) => {
  const { setDetails } = useDetails()

  return (
    <>
      <TabPanel p={0} w={"100%"} h={"100%"} mt='4'>
        {category.items.map((item) => (
          <Button
            onClick={() => {
              setDetails(item)
              toggleDetails(item)
            }}
            key={item.id}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            p={0}
            cursor={"pointer"}
            textAlign={"left"}
            w={"100%"}
            h={"100%"}
            bg={"transparent"}
            m={0}
          >
            <CardsDrinks cardsDrink={item} key={item.id} />
          </Button>
        ))}
      </TabPanel>
    </>
  )
}

export default CategoryPanel