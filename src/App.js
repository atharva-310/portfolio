import { Box, Container, useColorModeValue } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Tech } from './components/Tech';
import { Work } from './components/Work';
import { Footer } from './components/Footer';

function App() {
  return (
    <Box
      width="100vw"
      height="100vh"
      overflowX="hidden"
      overflowY="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          width: '10px',
          backgroundColor: `${useColorModeValue('white', 'black')}`,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `gray.500`,
          borderRadius: '20px',
        },
      }}
    >
      <Navbar />
      <Container maxW="700px" height="100%" pt="70px" as="main" px="20px">
        <Home />
        <Tech />
        <Work />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
