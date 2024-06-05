import {
    Box,
    VStack,
    Text,
    Heading,
    SimpleGrid,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'

// display analytics data
const Analytics = () => {
    return (
        <VStack gap={4}>
            <Heading w="100%" textAlign="left">
                Analytics
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="100%">
                <Box p={5} shadow="md" borderWidth="1px">
                    <Text fontSize="xl">Total Orders</Text>
                    <Text fontSize="2xl">100</Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px">
                    <Text fontSize="xl">Total Revenue</Text>
                    <Text fontSize="2xl">$1000</Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px">
                    <Text fontSize="xl">Total Customers</Text>
                    <Text fontSize="2xl">100</Text>
                </Box>
            </SimpleGrid>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Product</Th>
                        <Th>Orders</Th>
                        <Th>Revenue</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Product 1</Td>
                        <Td>10</Td>
                        <Td>$100</Td>
                    </Tr>
                    <Tr>
                        <Td>Product 2</Td>
                        <Td>10</Td>
                        <Td>$100</Td>
                    </Tr>
                    <Tr>
                        <Td>Product 3</Td>
                        <Td>10</Td>
                        <Td>$100</Td>
                    </Tr>
                    <Tr>
                        <Td>Product 4</Td>
                        <Td>10</Td>
                        <Td>$100</Td>
                    </Tr>
                    <Tr>
                        <Td>Product 5</Td>
                        <Td>10</Td>
                        <Td>$100</Td>
                    </Tr>
                </Tbody>
            </Table>
        </VStack>
    );
};

export default Analytics;