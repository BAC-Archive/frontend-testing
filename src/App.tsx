import React, { useState } from 'react';
import  { ChakraProvider, Box, CSSReset } from '@chakra-ui/react';
import TabLists from './components/TabLists';
import TopBar from './components/TopBar';


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return(
    <ChakraProvider>
      <CSSReset />
      <Box>
        <TopBar onMenuToggle={handleMenuToggle} />
      </Box>
      <TabLists />
    </ChakraProvider>
  );
};

export default App;
