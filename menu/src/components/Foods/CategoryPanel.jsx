import { TabPanel, Text } from '@chakra-ui/react'
import CardsDrinks from "../Cards/CardsDrinks"
import EmptyState from '../../../../dashboard/src/components/ui/EmptyComponent';

const CategoryPanel = ({ category, toggleDetails }) => {
  if (!category.items) {
    return (
      <TabPanel>
        <EmptyState title="Categoria Vazia" description="Não há itens disponíveis nesta categoria." />
      </TabPanel>
    );
  }
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