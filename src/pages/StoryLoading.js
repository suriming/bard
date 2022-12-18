import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';

function StoryLoading() {
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
      </Flex>
    </>
  );
}

export default StoryLoading;
