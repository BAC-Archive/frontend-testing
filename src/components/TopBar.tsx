import React from 'react';
import { Flex, Spacer, Heading, Avatar } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';


const TopBar: React.FC = ()  => {
  return (
   
    <Flex p={4}  color="black">
      <HamburgerMenu />
      <Spacer />
      <Heading size="sm">BAC-Archive</Heading>
      <Spacer />
      <Avatar bg='black' />
    </Flex>
  );
};

export default TopBar;
