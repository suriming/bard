import { Box, Flex, UnorderedList } from '@chakra-ui/react';
import PhotoInputItem from './PhotoInputItem';

function PhotoInputList({ imageURLs }) {
  return (
    <>
      <Flex
        alignItems="flex-start"
        flexDirection="row"
        p="0px"
        gap="8px"
        h="80px"
        overflowX="scroll"
      >
        {imageURLs &&
          imageURLs.map(imageSrc => <PhotoInputItem imageSrc={imageSrc} />)}
      </Flex>
    </>
  );
}

export default PhotoInputList;
