import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
import Home from '../Home/Home.jsx'
import CategoryPanel from '../Foods/CategoryPanel.jsx'

const Menu = ({ toggleDetails, menu }) => {

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