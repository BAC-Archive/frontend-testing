import React from 'react';
import SearchBar from './components/SearchBar';
import { Center, Box, Heading } from '@chakra-ui/react';

const App: React.FC = () => {
  return(
    <Box>
      <Center>
        <Heading>BAC-Archive</Heading> 
      </Center>
      <Center>
        <SearchBar />
      </Center>
    </Box>
  );
};

export default App;
