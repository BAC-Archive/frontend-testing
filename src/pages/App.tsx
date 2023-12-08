import React from 'react';
import  { ChakraProvider, Box, CSSReset } from '@chakra-ui/react';
import TabLists from '../components/TabLists';
import TopBar from '../components/TopBar';


const App: React.FC = () => {
  
  return(
    <ChakraProvider>
      <CSSReset />
      <Box>
        <TopBar />
      </Box>
      <TabLists />
    </ChakraProvider>
  );
};

export default App;
