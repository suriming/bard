import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { googleSignIn } from '../apis/auth';

function Login() {
  const navigate = useNavigate();

  const onSuccess = async res => {
    try {
      const response = await googleSignIn(res);
      if (response.status === 201) navigate('/collectinput');
      else navigate('/signup');
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  return (
    <>
      <Flex align="center" justify="center" direction="column">
        <Text>Login</Text>
        <GoogleLogin onSuccess={onSuccess} onError={res => console.log(res)} />
      </Flex>
    </>
  );
}

export default Login;
