import React from 'react';
import {
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';

const LoginCard: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex align="center" justify="center" minH="100vh">
        <VStack spacing={8} align="start" width="400px">
          <Heading mb={4}>Login</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="teal" mt={4} width="full">
            Sign In
          </Button>
          <Text mt={4}>
            {/* Temporary text without the registration link */}
            Don't have an account? Sign up here later.
          </Text>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};

export default LoginCard;
