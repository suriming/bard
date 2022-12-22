import { Divider, Flex, Img, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import BottomButton from '../components/BottomButton';
import bugSvg from '../assets/bug.svg';
import flowersDividerSvg from '../assets/flowersDivider.svg';
import tmpImg1 from '../assets/illust.png';

function Landing() {
  const navigate = useNavigate();
  const onStart = () => {
    navigate('/login');
  };
  return (
    <>
      <Flex
        flexDirection="column"
        align="center"
        p="42px 24px 100px"
        gap="42px"
      >
        <Text textAlign="center" fontSize="6xl" fontFamily="Rochester">
          BARD
        </Text>
        <Text>
          BARD composes a new magical story based on your own creative
          characters with your selfies, landscapes, food, and any other daily
          photos.
        </Text>
        <Img w="68px" src={bugSvg} />
        <Flex flexDirection="column" align="center" gap="0px">
          <Text fontFamily="Aladin" fontSize="22px">
            Stories by BARD
          </Text>
          <Img
            w="calc(100vw - 48px)"
            maxW="calc(768px - 48px)"
            src={flowersDividerSvg}
          />
        </Flex>
        <Flex
          flexDirection="column"
          align="flex-start"
          p="12px 10px"
          gap="10px"
          border="0.7px solid"
          w="calc(100vw - 48px)"
          maxW="calc(768px - 48px)"
          borderRadius="5px"
        >
          <Text fontSize="2xl">Sulim And a Cat</Text>
          <Flex
            flexDirection="row"
            justify="center"
            align="center"
            p="0px 0px 4px"
            gap="10px"
          >
            <Img w="180px" src={tmpImg1} />
            <Text fontSize="sm" textAlign="center">
              "수림과 고양이는 둘도 없는 친구가 되었습니다"
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          align="flex-start"
          p="12px 10px"
          gap="10px"
          border="0.7px solid"
          w="calc(100vw - 48px)"
          maxW="calc(768px - 48px)"
          borderRadius="5px"
        >
          <Text fontSize="2xl">Queen YeongJu And Naymar</Text>
          <Flex
            flexDirection="row"
            justify="center"
            align="center"
            p="0px 0px 4px"
            gap="10px"
          >
            <Img w="180px" src={tmpImg1} />
            <Text fontSize="sm" textAlign="center">
              “영주는 맨체스터 유나이티드 왕국의 여왕이었습니다"
            </Text>
          </Flex>
        </Flex>
        <BottomButton onClick={onStart} title="Get Started" />
        <Flex flexDirection="column" align="flex-start" gap="10px">
          <Divider w="calc(100vw - 48px)" maxW="calc(768px - 48px)" />
          <Text fontSize="xs">Contact</Text>
          <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;
