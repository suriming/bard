import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  const onTmpClick = () => {
    navigate('/collectinput');
  };
  const onTmpClick2 = () => {
    navigate('/home');
  };
  return (
    <>
      <Flex align="center" justify="center">
        <Text>Login</Text>
        <Button onClick={onTmpClick}>tmp button to input page </Button>
        <Button onClick={onTmpClick2}>tmp button to home</Button>
      </Flex>
    </>
  );
}

export default Login;
