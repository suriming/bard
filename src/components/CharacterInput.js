import { CheckIcon, RepeatIcon } from '@chakra-ui/icons';
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
import { useState } from 'react';

const Suggestions = [
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
  {
    emoji: '🐶',
    name: '강아지',
  },
  {
    emoji: '😼',
    name: '고양이',
  },
];

const CharacterInput = ({ characters, setCharacters }) => {
  const [name, setName] = useState('');

  const onNameSubmit = () => {
    const targetName = name.trim();
    if (name.trim() !== '') {
      if (characters.includes(targetName)) {
        alert('이미 추가된 캐릭터입니다.');
        return;
      }
      setCharacters(prev => [...prev, targetName]);
    }
    setName('');
  };

  const onSelectSuggestion = name => {
    if (characters.includes(name)) {
      alert('이미 추가된 캐릭터입니다.');
      return;
    }
    setCharacters(prev => [...prev, name]);
  };

  const removeCharacter = name => {
    setCharacters(prev => prev.filter(item => item !== name));
  };

  return (
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
          border="1px solid"
          borderRadius="5px"
          padding="8px"
          gap="4px"
          overflow="auto"
        >
          {Suggestions.map((item, index) => (
            <Button
              key={index}
              bgColor="#FDFAEF"
              flexShrink={0}
              onClick={() => onSelectSuggestion(item.name)}
            >
              <Box>{item.emoji}</Box>
              <Box>{item.name}</Box>
            </Button>
          ))}
        </Flex>
      </Flex>
      <Text fontWeight="bold">캐릭터 입력</Text>
      <Flex flexDirection="row" gap="8px">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="캐릭터를 입력하세요. ex: 서혁준"
        />
        <Button colorScheme="yellow" onClick={onNameSubmit}>
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
        {characters.map((item, index) => (
          <Tag key={index} colorScheme="blackAlpha" variant="subtle" m="0.2rem">
            <TagLabel>{item}</TagLabel>
            <TagCloseButton onClick={() => removeCharacter(item)} />
          </Tag>
        ))}
      </Box>
    </Flex>
  );
};

export default CharacterInput;
