import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

export const SecHeading = ({ content }) => {
  return (
    <Box>
      <Heading fontSize="2xl" fontWeight="600">
        {content}
      </Heading>
      <Box
        my="5px"
        width="40px"
        height="5px"
        bg={useColorModeValue('black', 'white')}
      ></Box>
    </Box>
  );
};
