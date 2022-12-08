import { Box, UnorderedList } from '@chakra-ui/react';
import PhotoInputItem from './PhotoInputItem';

function PhotoInputList({ imageURLs }) {
  return (
    <>
      <Box>
        <Box>
          {imageURLs &&
            imageURLs.map(imageSrc => <PhotoInputItem imageSrc={imageSrc} />)}
        </Box>
      </Box>
    </>
  );
}

export default PhotoInputList;
