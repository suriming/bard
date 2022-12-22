import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import BottomButton from '../components/BottomButton';
import CharacterInput from '../components/CharacterInput';
import Header from '../components/Header';
import ImageInput from '../components/ImageInput';

function StoryForm() {
  const [characters, setCharacters] = useState([]);
  const [imageInfos, setImageInfos] = useState([]);

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
        <Flex
          flexDirection="column"
          justify="space-between"
          alignItems="center"
          p="60px 24px 40px"
        >
          <Flex
            flexDirection="column"
            align="flex-start"
            padding="0px"
            gap="32px"
            w="calc(100vw - 48px)"
            maxW="calc(768px - 48px)"
          >
            <ImageInput imageInfos={imageInfos} setImageInfos={setImageInfos} />
            <CharacterInput
              characters={characters}
              setCharacters={setCharacters}
            />
          </Flex>
          <BottomButton title="입력 완료" />
        </Flex>
      </Flex>
    </>
  );
}

export default StoryForm;
