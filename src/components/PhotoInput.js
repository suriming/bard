import { Box, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PhotoInputList from './PhotoInputList';

function PhotoInput() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) {
      return;
    }
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  const onChangeImages = e => {
    setImages([...e.target.files]);
  };

  const preview = () => {};

  return (
    <>
      <Box>
        <Input
          type="file"
          h="100%"
          w="100%"
          multiple
          accept="image/*"
          onChange={onChangeImages}
        />
        <PhotoInputList imageURLs={imageURLs} />
      </Box>
    </>
  );
}

export default PhotoInput;
