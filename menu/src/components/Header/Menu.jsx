import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Stack } from "@chakra-ui/react";
import Home from '../Home/Home.jsx'
import CategoryPanel from '../Foods/CategoryPanel.jsx'

const Menu = ({ toggleDetails }) => {
    const menu = {
        id: "menu001",
        restaurant: "restaurant001",
        highligts: [
            {
                id: "item001",
                name: "Pizza",
                price: 17.00,
                description: "Pizza com orégano",
                image: "https://placehold.co/83x93"
            }
        ],
        categories: [
            {
                id: "category001",
                name: "Pizzas",
                items: [
                    {
                        id: "item001",
                        name: "Pizza",
                        image: "https://placehold.co/400",
                        description: "Pizza com queijo",
                        price: 17.00
                    },
                    {
                        id: "item001",
                        name: "Pizza",
                        image: "https://placehold.co/400",
                        description: "Pizza com queijo",
                        price: 17.00
                    },
                    {
                        id: "item001",
                        name: "Pizza",
                        image: "https://placehold.co/400",
                        description: "Pizza com queijo",
                        price: 17.00
                    }
                ]
            },
            {
                id: "category002",
                name: "Lanches",
                items: [
                    {
                        id: "item002",
                        name: "X-tudo",
                        image: "https://placehold.co/400",
                        description: "Ovo, hambúrguer, tomate, queijo, presunto, alface",
                        price: 17.00
                    }
                ]
            },
            {
                id: "category003",
                name: "Bebidas",
                items: [
                    {
                        id: "item001",
                        name: "Coca-cola",
                        image: "https://placehold.co/400",
                        description: "Bebida gaseificada refrescante",
                        price: 17.00
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Tabs position="relative" bg="#F3F3F3" height="100%">
                <TabList mt="4.5px" shadow="lg" color="#CECECE" bg="#FFF">
                    <Tab _selected={{ color: 'red' }}>Início</Tab>
                    {menu.categories.map((category) => (<Tab _selected={{ color: 'red' }}> {category.name} </Tab>))}
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    color="red"
                    height="2px"
                    bg="#B6001F"
                    borderRadius="15px"
                />
                <TabPanels>
                    <TabPanel>
                        <Home items={menu.highligts} toggleDetails={toggleDetails} />
                    </TabPanel>
                    {menu.categories.map((category) => <CategoryPanel category={category} toggleDetails={toggleDetails} />)}
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Menu