import { TabPanel, Text, Button } from '@chakra-ui/react'
import CardsDrinks from "../Cards/CardsDrinks"

const CategoryPanel = ({ category, toggleDetails }) => {
  return (
    <>
      <TabPanel>
        <Text fontWeight="bold">{category.name}</Text>
        {category.items.map((item) => (
          <CardsDrinks cardsDrink={item} key={item.id} toggleDetails={toggleDetails} />
        ))}
      </TabPanel>
    </>
  )
}

export default CategoryPanel