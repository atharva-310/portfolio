import {
  Box,
  Container,
  Flex,
  IconButton,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './Basic/ColorModeSwitcher';
import { HiMenu } from 'react-icons/hi';
import { menuItems } from '../data';

export const Navbar = () => {
  const itemColor = useColorModeValue('gray.100', '#292929');
  return (
    <Box
      as="nav"
      width="100%"
      height="70px"
      position="absolute"
      top="0"
      zIndex="80"
      px="5px"
    >
      <Container maxW="700px" bg={useColorModeValue('white', 'black')}>
        <Flex justify="flex-end">
          {/* <Heading> Portfolio </Heading> */}
          {/* <HStack> */}
          <ColorModeSwitcher justifySelf="flex-end" />
          <Menu placement="bottom-end">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              border="none"
              icon={
                <IconButton
                  size="md"
                  fontSize="2xl"
                  aria-label={`Menu`}
                  variant="ghost"
                  color="current"
                  icon={<HiMenu />}
                />
              }
              variant="outline"
            />
            <MenuList py={2} bg={itemColor}>
              {menuItems.map(item => {
                return (
                  <MenuItem
                    as="a"
                    bg={itemColor}
                    href={item.id}
                    textAlign="right"
                  >
                    {item.name}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>

          {/* </HStack> */}
        </Flex>
      </Container>
    </Box>
  );
};
