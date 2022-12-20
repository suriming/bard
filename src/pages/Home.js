import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';

function Home() {
  const navigate = useNavigate();
  const onStartCreateStory = () => {
    navigate('/collectinput');
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
        <Header title="BARD" />
        <Flex flexDirection="column" alignItems="flex-start" p="40px 24px 10px">
          <Flex justify="center" align="flex-start">
            <Text fontSize="4xl">Sulim's Stories</Text>
          </Flex>
          <Flex flexDirection="column" align="flex-start">
            Recent Stories
          </Flex>
          <Button
            colorScheme="yellow"
            w="calc(100vw - 48px)"
            maxW="calc(768px - 48px)"
            bottom="40px"
            position="fixed"
            onClick={onStartCreateStory}
          >
            스토리 만들기
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Home;
