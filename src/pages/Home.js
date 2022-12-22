import { Button, Flex, Img, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import MockImage1 from '../assets/violin.png';
import MockImage2 from '../assets/illust.png';
import { useEffect, useState } from 'react';
import moment from 'moment';

function Home() {
  const mock = [
    {
      title: '네이마르와 영주 1편',
      createdAt: '2022-05-30T09:25:59',
      img: MockImage1,
    },
    {
      title: '네이마르와 영주 2편',
      createdAt: '2022-11-30T09:25:59',
      img: MockImage2,
    },
  ];
  const navigate = useNavigate();
  const [stories, setStories] = useState([]);
  const [titles, setTitles] = useState([]);
  const [createdAts, setCreatedAts] = useState([]);
  const onStartCreateStory = () => {
    navigate('/collectinput');
  };
  useEffect(() => {
    (async () => {
      // const { title, createdAt, img } = mock;
      setStories(mock);
      // setTitles(title);
      // console.log(title);
    })().then(console.log(stories));
  }, []);

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
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          p="40px 24px 10px"
          gap="24px"
        >
          <Flex justify="center" align="flex-start">
            <Text fontWeight="700" fontSize="4xl" color="yellow.500">
              Sulim's Stories
            </Text>
          </Flex>
          <Flex flexDirection="column" align="flex-start" gap="16px">
            <Text fontWeight="semibold">Recent Stories</Text>
            {stories.map((item, index) => (
              <Flex
                key={index}
                flexDirection="row"
                align="center"
                p="10px"
                gap="10px"
                isolation="isolate"
                w="calc(100vw - 48px)"
                maxW="calc(768px - 48px)"
                h="100px"
                border="1px solid"
                boxShadow="lg"
                borderRadius="5px"
                alignSelf="stretch"
              >
                <Flex
                  flexDirection="column"
                  align="flex-start"
                  gap="10px"
                  w="calc(100vw - 48px - 90px)"
                  maxW="calc(768px - 48p - 90px)"
                >
                  <Text fontWeight="bold">{item.title}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {moment(item.createdAt).format('YYYY.MM.DD')}
                  </Text>
                </Flex>
                <Img h="80px" w="80px" src={item.img} />
              </Flex>
            ))}
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
