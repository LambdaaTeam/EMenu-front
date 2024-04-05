import { Box, Text, Button } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import CardsHighligts from "../Cards/CardsHighligts";
import { useDetails } from "../../hooks/Details";

const Home = ({ items, toggleDetails }) => {
  const { setDetails } = useDetails();

  return (
    <>
      <Box w="100%" p={4} color="white">
        <ImageSlider slides={SlideData} />
      </Box>
      <Text fontWeight="bold"> Promoções da semana </Text>
      {items.map((card) => (
        <>
          <Button
            onClick={() => {
              setDetails(card)
              toggleDetails()
            }}
            key={card.id}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            p='0'
            cursor={"pointer"}
            textAlign={"left"}
            w={"40%"}
            h={"100%"}
            bg={"transparent"}
            m='0'
          >
            <CardsHighligts key={card.id} card={card} />
          </Button>
        </>
      ))}
    </>
  )
}

export default Home