import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import CollectInput from './pages/CollectInput';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box boxSizing="border-box">
        <Box
          // minH="100vh"
          // w="35.2rem"
          // minW="600px"
          // // m="0 auto"
          // maxW="422px"
          // // minW="450px"
          // m={['0 auto', '0 0 0 calc(50vw - 1px)']}
          // m={[
          //   '0 auto', // 0-30em
          //   '0 auto', // 30em-48em
          //   '0 0 0 calc(50vw - 1px) auto', // 48em-62em
          //   '0 0 0 calc(50vw - 1px) auto', // 62em+
          // ]}
          m={{
            base: '0 auto', // 0-30em
            md: '0 auto', // 30em-48em
            lg: '0 0 0 calc(50vw - 1px)', // 48em-62em
            xl: '0 0 0 calc(50vw - 1px)', // 62em+
          }}
          // // ml="730.5px"
          // overflow="hidden"
          // // boxSizing="border-box"
          // boxShadow="lg"
          // rounded="md"
          minH="100vh"
          // w={['22.2rem', '24.2rem', '100vw', '100vw']}
          // w="20rem"
          w={{
            base: '24em', // 0-30em
            md: '22rem', // 30em-48em
            lg: '450px', // 48em-62em
            xl: '450px', // 62em+
          }}
          minW="22rem"
          // m="0 auto"
          overflow="hidden"
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