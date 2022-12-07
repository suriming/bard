import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        w="35.2rem"
        minW="600px"
        m="0 auto"
        overflow="hidden"
        boxSizing="border-box"
        boxShadow="lg"
        rounded="md"
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
