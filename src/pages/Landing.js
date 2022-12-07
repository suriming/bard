import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function Landing() {
  const navigate = useNavigate();
  const onStart = () => {
    navigate('/login');
  };
  return (
    <>
      <VStack pt={2}>
        <Box>
          <Text fontSize="1.5rem">BARD</Text>
        </Box>
        <Button onClick={onStart}>Get Started</Button>
      </VStack>
    </>
  );
}

export default Landing;
