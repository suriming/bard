import { Box, Button, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import ViolinIcon from '../assets/violin.png';

function Login() {
  const navigate = useNavigate();
  const onClickSignUp = () => {
    navigate('/signuppolicy');
  };
  const onTmpClick = () => {
    navigate('/collectinput');
  };
  const onTmpClick2 = () => {
    navigate('/home');
  };
  return (
    <>
      <Flex
        // pt="3.5rem"
        w="100%"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        flexBasis="0%"
        overflow="auto"
      >
        <Header title="Login" isBack />
        <Flex
          flexDirection="column"
          alignItems="center"
          p="40px 10px 10px"
          gap="24px"
        >
          <Text fontSize="3xl">Login to Bard</Text>
          <Image boxSize="80px" src={ViolinIcon} />
          <Text>
            New to BARD?&nbsp;
            <Link onClick={onClickSignUp} color="yellow.500">
              Join us with google account
            </Link>
          </Text>
          <Button onClick={onTmpClick2}>tmp button to home</Button>
          <a
            href="https://www.flaticon.com/free-icons/violin"
            title="violin icons"
          >
            Violin icons created by Freepik - Flaticon
          </a>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
