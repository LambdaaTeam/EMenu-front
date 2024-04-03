import { TabPanel, Text } from '@chakra-ui/react'
import CardsDrinks from "../Cards/CardsDrinks"

const CategoryPanel = ({ category }) => {

  return (
    <>
      <TabPanel>
        <Text> {category.name} </Text>
        {category.items.map((item) => (<CardsDrinks cardsDrink={item} />))}
      </TabPanel>
    </>
  )
}

export default CategoryPanel