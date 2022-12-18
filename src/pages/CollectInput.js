import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  VStack,
  Flex,
  Button,
  Icon,
  Input,
  Stack,
  TagLabel,
  Tag,
  TagCloseButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import PhotoInputList from '../components/PhotoInputList';

function CollectInput() {
  const navigate = useNavigate();
  const onComplete = () => {
    navigate('/storyloading');
  };

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

  const [tags, setTags] = useState([]);

  const handleKeyDown = e => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      console.log(tags);
      const value = e.target.value;
      if (!value.trim()) {
        return;
      }
      setTags([...tags, value]);
      e.target.value = '';
    }
  };

  const removeTag = idx => {
    setTags(tags.filter((item, i) => i !== idx));
  };

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
        <Header title="스토리 만들기" />
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
            <Text>이미지 업로드</Text>
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
            <Text>캐릭터 선택</Text>
            <Input
              flexGrow="1"
              type="text"
              placeholder="캐릭터를 입력하세요..."
              onKeyDown={handleKeyDown}
              // outline="none"
              // border="none"
              cursor="text"
            />
            <Flex flexDirection="column" justify="center" align="center">
              <Flex w="500px" flexWrap="wrap" align="center" gap="1.8">
                {tags.map((tag, index) => {
                  console.log(index);
                  return (
                    <Stack direction="row">
                      <Tag key={index}>
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                      <TagCloseButton onClick={removeTag(index)} />
                      {/* <Text>{tag}</Text> */}
                      {/* <Button
                        size="xs"
                        colorScheme="blackAlpha"
                        borderRadius="50%"
                        onClick={() => removeTag(index)}
                      >
                        x
                      </Button> */}
                    </Stack>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
          <Button
            colorScheme="yellow"
            w="calc(100vw - 48px)"
            maxW="calc(768px - 48px)"
            bottom="40px"
            position="fixed"
            onClick={onComplete}
          >
            입력 완료
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default CollectInput;
