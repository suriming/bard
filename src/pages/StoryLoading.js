import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import BottomButton from '../components/BottomButton';
import Header from '../components/Header';

function StoryLoading() {
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
        <Flex flexDirection="column" alignItems="flex-start" p="40px 24px 10px">
          <BottomButton onClick={onClick} title="보러가기" />
        </Flex>
      </Flex>
    </>
  );
}

export default StoryLoading;
