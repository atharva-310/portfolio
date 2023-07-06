import { Text, Link, HStack, Icon, Center } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

export const Footer = () => {
  return (
    <HStack
      justifyContent="space-between"
      height="70px"
      py="30px"
      borderTop="1px solid"
    >
      <Text>© 2023 Atharva Pakade. All Rights Reserved.</Text>
      <Link fontSize="lg">
        <Center>
          <Icon as={AiFillGithub} mx="10px" /> Source Code
        </Center>
      </Link>
    </HStack>
  );
};
