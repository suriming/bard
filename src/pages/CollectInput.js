import { Box, Text, VStack, Flex, Button } from '@chakra-ui/react';
import PhotoInput from '../components/PhotoInput';

function CollectInput() {
  return (
    <>
      <Flex
        pt="3.5rem"
        w="100%"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        flexBasis="0%"
        overflow="auto"
      >
        <Flex pr="1.5rem" pl="1.5rem" pb="6.25rem">
          <Flex justify="center" align="flex-start">
            <Text>Input</Text>
            <PhotoInput />
          </Flex>
        </Flex>
        <Flex
          position="fixed"
          w="100%"
          maxW="48rem"
          bottom="0rem"
          flexDirection="row"
          boxSizing="border-box"
          justify="center"
          m="0 auto"
          p="1.5rem"
        >
          <Button w="100%">다음으로</Button>
        </Flex>
      </Flex>
    </>
  );
}

export default CollectInput;
