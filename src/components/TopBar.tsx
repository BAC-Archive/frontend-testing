import React from 'react';
import { Grid, GridItem, Heading, Avatar, Box, Flex } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';
import DarkModeSwitch from './DarkModeSwitch';

const TopBar: React.FC = () => {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={4}
      alignItems="center"
      p={4}
      borderBottom="1px solid #ddd"
    >
      <GridItem colSpan={1}>
        <HamburgerMenu />
      </GridItem>

      <GridItem colSpan={2} textAlign="center">
        <Heading size="md" fontWeight="bold" color="blue.500">
          BAC-Archive
        </Heading>
      </GridItem>

      <GridItem colSpan={2} textAlign="right">
        <DarkModeSwitch />
      </GridItem>

      <GridItem colSpan={1}>
        <Flex justifyContent="flex-end">
          <Box>
            <Avatar
              size="sm"
              name="Username"
              src="https://example.com/avatar.jpg"
            />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default TopBar;

