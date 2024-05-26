import { Text, Grid, Box } from "@chakra-ui/react";
import CardsHighligts from "../Cards/CardsHighligts";
import { useDetails } from "../../hooks/Details";

const Home = ({ items, toggleDetails }) => {
  const { setDetails } = useDetails();
  return (
    <Box >
      <Text fontWeight="bold">Promoções da semana</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
        {items.map((card) => (
          <CardsHighligts
            key={card.id}
            card={card}
            onClick={() => {
              setDetails(card)
              toggleDetails()
            }}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default Home