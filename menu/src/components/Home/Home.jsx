import { Box, Text } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import CardsHighligts from "../Cards/CardsHighligts";
import CardsSeller from '../Cards/CardsSeller';
import CardsFoods from '../Cards/CardsFoods';
import CardsDrinks from '../Cards/CardsDrinks';


const Home = ({ items }) => {
  return (
    <>

      <Box w="100%" p={4} color="white">
        <ImageSlider slides={SlideData} />
      </Box>
      <Text fontWeight="bold"> Promoções da semana </Text>
      {items.map((card) => (
        <CardsHighligts key={card.id} card={card} />
      ))}

      <Text fontWeight="bold"> Mais vendidos </Text>
      {items.map((cards) => (
        <CardsSeller key={cards.id} cards={cards} />
      ))}

      <Text fontWeight="bold"> Pizzas salgadas </Text>
      {items.map((cardsFood) => (
        <CardsFoods key={cardsFood.id} cardsFood={cardsFood} />
      ))}

      <Text fontWeight="bold"> Refrigerantes </Text>
      {items.map((cardsDrink) => (
        <CardsDrinks key={cardsDrink.id} cardsDrink={cardsDrink} />
      ))}

    </>
  )
}

export default Home