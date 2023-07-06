import { Text, Link, HStack, Icon, Center, Flex } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

export const Footer = () => {
  return (
    <Flex
      flexDir={{ base: 'column-reverse' }}
      flexDirection="column-reverse"
      justifyContent="space-between"
      height="70px"
      py="30px"
      // borderTop="1px solid"
    >
      <Text textAlign={'center'}>
        © 2023 Atharva Pakade. All Rights Reserved.
      </Text>
      <Link
        fontSize="lg"
        href={'https://github.com/atharva-310/portfolio'}
        target={'_blank'}
      >
        <Center>
          <Icon as={AiFillGithub} mx="10px" /> Source Code
        </Center>
      </Link>
    </Flex>
  );
};
