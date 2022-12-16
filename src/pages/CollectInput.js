import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Text, VStack, Flex, Button, Icon } from '@chakra-ui/react';
import CharacterInput from '../components/CharacterInput';
import Header from '../components/Header';
import PhotoInput from '../components/PhotoInput';

function CollectInput() {
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
          justify="space-between"
          alignItems="flex-start"
          p="60px 24px 40px"
        >
          <Flex
            flexDirection="column"
            align="flex-start"
            padding="0px"
            gap="32px"
          >
            <Text>Input</Text>
            <PhotoInput />
            <Text>캐릭터 선택</Text>
            <CharacterInput />
          </Flex>
          <Button
            colorScheme="yellow"
            w="calc(100vw - 48px)"
            maxW="calc(768px - 48px)"
            bottom="40px"
            position="fixed"
          >
            다음으로
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default CollectInput;
