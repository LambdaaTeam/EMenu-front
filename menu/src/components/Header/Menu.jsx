import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
import Home from '../Home/Home.jsx'
import CategoryPanel from '../Foods/CategoryPanel.jsx'

const Menu = ({ toggleDetails, menu }) => {
    return (
        <Tabs position="relative" bg="#F3F3F3" height="100%">
            <TabList shadow="lg" color="#CECECE" bg="#FFF">
                <Tab _selected={{ color: 'red' }}>Início</Tab>
                {menu.categories.map((category) => (<Tab key={category.id} _selected={{ color: 'red' }}> {category.name} </Tab>))}
            </TabList>
            <TabIndicator
                mt="-2px"
                color="red"
                height="4px"
                bg="#B6001F"
            />
            <TabPanels>
                <TabPanel>
                    <Home items={menu.highligts} toggleDetails={toggleDetails} />
                </TabPanel>
                {menu.categories.map((category) => <CategoryPanel key={category.id} category={category} toggleDetails={toggleDetails} />)}
            </TabPanels>
        </Tabs>
    )
}

export default Menu