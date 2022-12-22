import { Box, Image, Img, ListItem } from '@chakra-ui/react';

function PhotoInputItem({ imageSrc }) {
  return (
    <>
      {/* <Box h="80px" w="80px" backgroundImage={imageSrc}></Box> */}
      <Image
        borderRadius="5px"
        h="80px"
        w="80px"
        objectFit="cover"
        src={imageSrc}
      />
    </>
  );
}

export default PhotoInputItem;
