import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import BottomButton from '../components/BottomButton';
import Header from '../components/Header';

function SignUpName() {
  const navigate = useNavigate();
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
        <Header title="Sign Up" />
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          align="center"
          p="60px 24px"
        >
          <BottomButton title="Submit" />
        </Flex>
      </Flex>
    </>
  );
}

export default SignUpName;