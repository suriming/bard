import { Box, Img, ListItem } from '@chakra-ui/react';

function PhotoInputItem({ imageSrc }) {
  return (
    <>
      <Img borderRadius="5px" h="80px" src={imageSrc} />
    </>
  );
}

export default PhotoInputItem;
