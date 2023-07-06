import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';

import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ImNewTab } from 'react-icons/im';

export const ProjectCard = ({ projectInfo }) => {
  const [hoverComp, setHoverComp] = useState('none');
  const topValue = {
    none: '60%',
    img: '100%',
    desc: '0',
  };

  return (
    <HStack
      position="relative"
      alignItems={'flex-end'}
      my="50px"
      justifyContent="flex-end"
      overflow="hidden"
      borderRadius={'2px'}
    >
      <Center
        as="a"
        href={projectInfo.live ? projectInfo.live : projectInfo.source}
        target={'_blank'}
        width="100%"
        height="300px"
        borderRadius="2px"
        bg={projectInfo.bgColor}
        onMouseEnter={() => setHoverComp('img')}
        onMouseLeave={() => setHoverComp('none')}
      >
        <Image
          boxShadow={'dark-lg'}
          borderRadius={'md'}
          src={projectInfo.img}
          height="90%"
          maxW={'100%'}
          objectFit="contain"
          // objectPosition={'50%'}
        />
      </Center>

      <Box
        bg={useColorModeValue('gray.200', '#212529')}
        top={topValue[hoverComp]}
        width="100%"
        height="300px"
        position="absolute"
        opacity={hoverComp === 'desc' ? '98%' : '95%'}
        transition=" top 1s , opacity 1s ease-in-out"
        overflowY="scroll"
        p={5}
        sx={{
          '&::-webkit-scrollbar': {
            width: '10px',
            backgroundColor: `${useColorModeValue('gray.200', '#212529')}`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `gray.500`,
            borderRadius: '20px',
          },
        }}
        onMouseEnter={() => setHoverComp('desc')}
        onMouseLeave={() => setHoverComp('none')}
      >
        <Text>
          {projectInfo.type}
          {projectInfo.source && (
            <Link
              href={projectInfo.source}
              target={'_blank'}
              fontSize="lg"
              px="10px"
            >
              <Icon target={'_blank'} as={AiFillGithub} />
            </Link>
          )}
          {projectInfo.live && (
            <Link href={projectInfo.live} fontSize="lg" px="10px">
              <Icon as={ImNewTab} />
            </Link>
          )}
        </Text>
        <Heading fontSize="3xl">{projectInfo.name}</Heading>
        {hoverComp === 'desc' && (
          <>
            <UnorderedList my={4}>
              {projectInfo.points.map((point, index) => (
                <ListItem key={index}>{point}</ListItem>
              ))}
            </UnorderedList>
            <Flex flexWrap="wrap">
              {projectInfo.tech.map((item, index) => (
                <Tag key={index} m={2} size="2xl" p={2}>
                  {item}
                </Tag>
              ))}
            </Flex>
          </>
        )}
      </Box>
    </HStack>
  );
};
