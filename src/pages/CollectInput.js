import { AddIcon, CheckIcon, RepeatIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  TagLabel,
  Tag,
  TagCloseButton,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import BottomButton from '../components/BottomButton';
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
  const suggestCharacters = [
    {
      emoji: '⚽️',
      name: '네이마르',
    },
    {
      emoji: '🎄',
      name: '산타',
    },
    {
      emoji: '🦌',
      name: '루돌프',
    },
  ];

  const onClickSuggestedCharacter = name => {
    setValues([...values, name]);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onCheck = e => {
    setValues([...values, value]);
    setValue('');
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
      <input
        type="file"
        multiple
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={onChangeImages}
      />
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
            <Flex flexDirection="column" gap="5px">
              <Text fontWeight="bold">이미지 업로드</Text>
              <Text color="gray.600" fontSize="xs">
                최소 3장에서 최대 5장의 이미지를 업로드 해주세요.
              </Text>
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
                  <AddIcon />
                </Button>
                <PhotoInputList imageURLs={imageURLs} />
              </Flex>
            </Flex>
            <Flex flexDirection="column" gap="20px">
              <Flex flexDirection="column" align="flex-start" gap="5px">
                <Flex gap="5px">
                  <Text fontSize="sm">* BARD의 캐릭터 제안</Text>
                  <Button size="xs">
                    <RepeatIcon color />
                  </Button>
                </Flex>
                <Flex
                  minH="48px"
                  w="calc(100vw - 48px)"
                  maxW="calc(768px - 48px)"
                  border="0.7px solid"
                  borderRadius="5px"
                >
                  <Flex flexDirection="row" align="center" p="8px 0px">
                    <Flex
                      flexDirection="row"
                      align="flex-start"
                      p="0px 10px"
                      gap="4px"
                    >
                      {suggestCharacters.map((item, index) => (
                        <Button
                          key={index}
                          bgColor="#FDFAEF"
                          onClick={e => onClickSuggestedCharacter(item.name)}
                        >
                          <Box>{item.emoji}</Box>
                          <Box>{item.name}</Box>
                        </Button>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Text fontWeight="bold">캐릭터 입력</Text>
              <Flex flexDirection="row" gap="8px">
                <Input
                  value={value}
                  onChange={handleChange}
                  placeholder="캐릭터를 입력하세요. ex: 서혁준"
                />
                <Button colorScheme="yellow" onClick={onCheck}>
                  <CheckIcon />
                </Button>
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
          <BottomButton title="입력 완료" onClick={onComplete} />
        </Flex>
      </Flex>
    </>
  );
}

export default CollectInput;
