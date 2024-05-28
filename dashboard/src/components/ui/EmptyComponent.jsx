import { Box, Text, VStack } from '@chakra-ui/react';

const EmptyState = ({ title, description }) => {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      borderWidth={1}
      borderRadius="md"
      borderColor="gray.200"
    >
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Text color="gray.500">
          {description}
        </Text>
      </VStack>
    </Box>
  );
}

export default EmptyState;
