import { Box, Flex, Icon, Tag, TagLabel } from '@chakra-ui/react';
import { SecHeading } from './Basic/SecHeading';
import { techList } from '../data';

export const Tech = () => {
  return (
    <Box as="section" my="70px" id="tech">
      <SecHeading content={'Technologies'} />
      <Flex wrap="wrap" my="20px">
        {techList.map((item, index) => {
          return (
            <Tag m={2} size="2xl" p={2}>
              <Icon fontSize="2xl" color={item.color}>
                {item.icon}
              </Icon>
              <TagLabel px={2}> {item.name}</TagLabel>
            </Tag>
          );
        })}
      </Flex>
    </Box>
  );
};
