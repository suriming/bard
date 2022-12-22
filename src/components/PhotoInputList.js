import { Box, Flex, UnorderedList } from '@chakra-ui/react';
import { useEffect } from 'react';
import PhotoInputItem from './PhotoInputItem';

function ImagePreviews({ previews, loadingImages }) {
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
        {previews.map((imageSrc, index) => (
          <PhotoInputItem key={index} imageSrc={imageSrc} />
        ))}
      </Flex>
    </>
  );
}

export default ImagePreviews;
