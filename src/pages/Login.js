import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  const onTmpClick = () => {
    navigate('/collectinput');
  };
  return (
    <>
      <Flex align="center" justify="center">
        <Text>Login</Text>
        <Button onClick={onTmpClick}>tmp button to input page </Button>
      </Flex>
    </>
  );
}

export default Login;
