import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import CollectInput from './pages/CollectInput';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box boxSizing="border-box">
        <Box
          m={'0 auto'} // 어플리케이션 영역을 중앙에 위치시킴
          minH="100vh"
          w="100vw" // 어플리케이션 영역 너비를 뷰포트 너비로 설정
          maxW="48rem" // 어플리케이션 영역 너비가 48rem(768px)을 넘지 않도록 설정
          overflow="hidden"
          boxShadow="lg"
          rounded="md"
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="collectinput" element={<CollectInput />} />
          </Routes>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
