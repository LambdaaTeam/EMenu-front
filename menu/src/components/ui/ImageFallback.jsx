import { Image, Box, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { WarningIcon } from '@chakra-ui/icons';

const ImageWithFallback = ({ src, alt, boxSize, iconSize = 6, textSize = 'md', ...props }) => {
    const [hasError, setHasError] = useState(false);

    return (
        <>
            {hasError ? (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="lg"
                    bg="gray.100"
                    boxSize={boxSize}
                    {...props}
                >
                    <Icon as={WarningIcon} boxSize={iconSize} color="gray.500" />
                    <Text ml={2} color="gray.500" fontSize={textSize}>Sem imagem</Text>
                </Box>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    onError={() => setHasError(true)}
                    boxSize={boxSize}
                    {...props}
                />
            )}
        </>
    );
};

export default ImageWithFallback;
