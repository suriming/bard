import { Box, Img, ListItem } from '@chakra-ui/react';

function PhotoInputItem({ imageSrc }) {
  return (
    <>
      <Box>
        <Img src={imageSrc} />
      </Box>
    </>
  );
}

export default PhotoInputItem;
