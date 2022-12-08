import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import CollectInput from './pages/CollectInput';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minW="1024px">
        <Box
          minH="100vh"
          w="100%"
          maxW="422px"
          minW="450px"
          m="0 0 0 calc(50vw - 1px)"
          ml="730.5px"
          overflow="hidden"
          boxSizing="border-box"
          boxShadow="lg"
          rounded="md"
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="collectinput" element={<CollectInput />} />
          </Routes>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
