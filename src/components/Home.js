import {
  Box,
  Text,
  Image,
  HStack,
  Heading,
  Tag,
  Flex,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import ath_portrait from '../assets/ath_portrait.jpg';
import SocialButton from './SocialButton';
import { socials } from '../data';

export const Home = () => {
  const side = useBreakpointValue({ base: '130px', md: '150px' });
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
  });
  return (
    <Box as="section" id="home">
      <Flex width="100%" mb="30px" direction={isMobile ? 'column' : 'row'}>
        <Image
          alignSelf="center"
          src={ath_portrait}
          width={side}
          height={side}
          borderRadius="50%"
          objectFit="cover"
          objectPosition="50% 20%"
          border="4px solid white"
        />
        <Box px={isMobile ? '' : '20px'} width="100%">
          <Text fontSize="xl" fontWeight="600">
            Hi, I am
          </Text>
          <Heading>Atharva Pakade</Heading>
          <HStack>
            <Stack direction={'row'} my="10px" mr="10px">
              {socials.map((item, index) => {
                return (
                  <SocialButton label={item.name} href={item.link}>
                    {item.logo}
                  </SocialButton>
                );
              })}
            </Stack>
          </HStack>
          <Flex wrap="wrap">
            <Tag mr="10px" my="10px" colorScheme="red" size="md" p={2}>
              Final Year Student
            </Tag>
            <Tag mr="10px" my="10px" colorScheme="green" size="md" p={2}>
              FullStack Web Developer
            </Tag>
          </Flex>
        </Box>
      </Flex>
      <Text mt={3} fontSize="md">
        I am an Enthusiastic engineering student driven by a deep passion for
        programming. Equipped with strong proficiency in Data Structures and
        Algorithms and full-stack web development. With a curious mindset and a
        thirst for knowledge, I eagerly embrace opportunities to learn new
        technologies and expand my skill set. Committed to delivering innovative
        solutions, I am ready to contribute my expertise and dedication to make
        a positive impact.
      </Text>
    </Box>
  );
};
