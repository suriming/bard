import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import BottomButton from '../components/BottomButton';
import Header from '../components/Header';

function LoadingComplete() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/storyview');
  };
  return (
    <>
      <Flex
        w="100%"
        flexDirection="column"
        p="0px"
        flexGrow="1"
        flexShrink="1"
        overflow="auto"
      >
        <Header title="스토리 만들기" isBack />
        <BottomButton title="보러 가기" onClick={onClick} />
      </Flex>
    </>
  );
}

export default LoadingComplete;
