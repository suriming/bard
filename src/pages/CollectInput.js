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
import { useEffect, useRef, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
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
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onCheck = e => {
    setValue('');
    setValues([...values, value]);
  };

  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      cTag: [{ content: 'Bill' }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'cTag', // unique name for your Field Array
    });

  const onSubmit = async data => {
    console.log(data);
  };

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

  const [cusTags, setCusTags] = useState(['띠용', '뭐임']);
  const [tagItem, setTagItem] = useState('댇체');

  const addTag = () => {
    console.log(tagItem);
    (async () => {
      setCusTags([...cusTags, tagItem]);
    })().then(() => {
      setTagItem('');
      console.log(cusTags);
    });
    // setTags([...tags, tagItem]);
    setTagItem('');
    console.log(cusTags);
  };

  const removeTag = idx => {
    // setCusTags(cusTags.filter((item, i) => i !== idx));
    setValues(values.filter((item, i) => i !== idx));
  };

  const imageInputSquare = (
    <Input
      type="file"
      h="80px"
      w="80px"
      multiple
      accept="image/*"
      onChange={e => {
        onChangeImages();
        setClicked(false);
      }}
    />
  );

  const onClickInputSquare = e => {
    console.log(e);
    setClicked(true);
  };

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input type="file" hidden ref={inputRef} />
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
            <Text>이미지 업로드: 3장 ~ 5장 </Text>
            <Flex
              flexDirection="row"
              align="flex-start"
              p="0px 0px 7px"
              gap="8px"
              h="82px"
            >
              <Button
                h="80px"
                w="80px"
                colorScheme="yellow"
                onClick={handleClick}
              >
                {/* {clicked?im} */}
              </Button>
            </Flex>

            {/* {images ? (
                imageInputSquare
              ) : (
                <PhotoInputList imageURLs={imageURLs} />
              )} */}
            {/* <Input
                type="file"
                h="100%"
                w="100%"
                multiple
                accept="image/*"
                onChange={onChangeImages}
              />
              <PhotoInputList imageURLs={imageURLs} /> */}
            {/* </Box> */}
            {/* <Input
              flexGrow="1"
              type="text"
              placeholder="캐릭터를 입력하세요..."
              onChange={e => setTagItem(e.target.value)}
              // onKeyDown={handleKeyDown}
              value={tagItem}
              // outline="none"
              // border="none"
              cursor="text"
            />
            <Button onClick={addTag}>제발</Button>
            <Flex flexDirection="column" justify="center" align="center">
              <Flex w="500px" flexWrap="wrap" align="center" gap="1.8">
                <Stack direction="row">
                  {cusTags &&
                    cusTags.map((custag, index) => (
                      <Tag key={index}>
                        <TagLabel>{custag}</TagLabel>
                        <TagCloseButton onClick={removeTag(index)} />
                      </Tag>
                    ))}
                </Stack>
              </Flex>
            </Flex> */}
            {/* <Box
              borderColor="gray.300"
              borderStyle="dashed"
              borderWidth="2px"
              rounded="md"
              shadow="sm"
              role="group"
              transition="all 150ms ease-in-out"
              _hover={{
                shadow: 'md',
              }}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              ???
            </Box> */}
            <Flex flexDirection="column" gap="5px">
              <Text>캐릭터 입력</Text>
              <Flex flexDirection="row" gap="8px">
                <Input
                  value={value}
                  onChange={handleChange}
                  placeholder="캐릭터를 입력하세요. ex: 서혁준"
                />
                <Button onClick={onCheck}>체크</Button>
              </Flex>
              <Box
                w="calc(100vw - 48px)"
                maxW="calc(768px - 48px)"
                minH="100px"
                background="gray.100"
                p="10px"
              >
                {values.map((item, index) => (
                  <Tag
                    key={index}
                    colorScheme="blackAlpha"
                    variant="subtle"
                    m="0.2rem"
                  >
                    <TagLabel c>{item}</TagLabel>
                    <TagCloseButton onClick={() => removeTag(index)} />
                  </Tag>
                ))}
              </Box>
              {/* <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                  {fields.map((field, index) => {
                    return (
                      <Tag key={field.id}>
                        <Input
                          {...register(`cTag.${index}.content`, {
                            required: true,
                          })}
                        />
                        <TagCloseButton onClick={() => remove(index)} />
                        <Controller
                          render={({ field }) => <input {...field} />}
                          name={`cTag.${index}.content`}
                          control={control}
                        />
                      </Tag>
                    );
                  })}
                  <Button onClick={() => append({ content: '' })}>
                    append
                  </Button>
                </ul>
              </form> */}
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
