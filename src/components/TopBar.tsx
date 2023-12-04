import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/react';

const TopBar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem"
      bg="teal.500"
      color="black"
    >
      <Flex align="center" mr={5}>
        {/* Your Logo or Branding */}
        <Heading as="h1" size="lg">
          Logo
        </Heading>
      </Flex>
      <Box>
        <h1>Hello world ! this is a topbar</h1>
      </Box>
      <Box>
        {/* Navigation Link */}
        <Link href="#" fontSize="lg" mr={4}>
          Home
        </Link>

        {/* Add more links as needed */}
      </Box>
    </Flex>
  );
};

export default TopBar;

