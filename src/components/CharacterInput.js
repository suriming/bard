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

// π₯· λμ, π§ μ§λ, π§ μ’λΉ, π§βπ μ°μ£ΌλΉνμ¬, π λ¬ν λΌ, π§ββοΈ κ°λ¬ν, π§ λλΌνλΌ, π¦ μκΈ°μμ΄, β λμ¬λ, π¦ μκΈ°λμλ¦¬, π¦ μλ, π¦ μ€μ§μ΄, π§ββοΈ μλ¦¬μΌ, π§ββοΈ νμ»€λ²¨, π¦ΈββοΈ μνΌλ§¨, π¦ΉββοΈ λ°°νΈλ§¨, π‘οΈ μ μ¬, π ν λ§μ€, π λ²λΈλΉ, π νλ, π λ¬λ, π λ§λ¦¬μ€, π³ κ·Έλ£¨νΈ, π·οΈ μ€νμ΄λλ§¨, π μ€νΈλ§¨, βοΈ μ¬λΌν, π§ββοΈ λ κ³¨λΌμ€, π§ͺ λ§€λ μ¬μ΄μΈν°μ€νΈ

const CharacterInput = ({ characters, setCharacters }) => {
  const [suggestions, setSuggestions] = useState([
    {
      emoji: 'π₯·',
      name: 'λμ',
    },
    {
      emoji: 'π§',
      name: 'μ§λ',
    },
    {
      emoji: 'π§',
      name: 'μ’λΉ',
    },
    {
      emoji: 'π§βπ',
      name: 'μ°μ£ΌλΉνμ¬',
    },
    {
      emoji: 'π',
      name: 'λ¬ν λΌ',
    },
    {
      emoji: 'π§ββοΈ',
      name: 'κ°λ¬ν',
    },
    {
      emoji: 'π§',
      name: 'λλΌνλΌ',
    },
    {
      emoji: 'π¦',
      name: 'μκΈ°μμ΄',
    },
    {
      emoji: 'β',
      name: 'λμ¬λ',
    },
    {
      emoji: 'π¦',
      name: 'μκΈ°λμλ¦¬',
    },
    {
      emoji: 'π¦',
      name: 'μλ',
    },
    {
      emoji: 'π¦',
      name: 'μ€μ§μ΄',
    },
    {
      emoji: 'π§ββοΈ',
      name: 'μλ¦¬μΌ',
    },
    {
      emoji: 'π§ββοΈ',
      name: 'νμ»€λ²¨',
    },
    {
      emoji: 'π¦ΈββοΈ',
      name: 'μνΌλ§¨',
    },
    {
      emoji: 'π¦ΉββοΈ',
      name: 'λ°°νΈλ§¨',
    },
    {
      emoji: 'π‘οΈ',
      name: 'μ μ¬',
    },
    {
      emoji: 'π',
      name: 'ν λ§μ€',
    },
    {
      emoji: 'π',
      name: 'λ²λΈλΉ',
    },
    {
      emoji: 'π',
      name: 'νλ',
    },
    {
      emoji: 'π',
      name: 'λ¬λ',
    },
    {
      emoji: 'π',
      name: 'λ§λ¦¬μ€',
    },
    {
      emoji: 'π³',
      name: 'κ·Έλ£¨νΈ',
    },
    {
      emoji: 'π·οΈ',
      name: 'μ€νμ΄λλ§¨',
    },
    {
      emoji: 'π',
      name: 'μ€νΈλ§¨',
    },
    {
      emoji: 'βοΈ',
      name: 'μ¬λΌν',
    },
    {
      emoji: 'π§ββοΈ',
      name: 'λ κ³¨λΌμ€',
    },
    {
      emoji: 'π§ͺ',
      name: 'λ§€λ μ¬μ΄μΈν°μ€νΈ',
    },
    {
      emoji: 'β½οΈ',
      name: 'λ€μ΄λ§λ₯΄',
    },
    {
      emoji: 'π',
      name: 'μ°ν',
    },
    {
      emoji: 'π¦',
      name: 'λ£¨λν',
    },
    {
      emoji: 'πΆ',
      name: 'κ°μμ§',
    },
    {
      emoji: 'πΌ',
      name: 'κ³ μμ΄',
    },
  ]);

  const [name, setName] = useState('');

  const onNameSubmit = () => {
    const targetName = name.trim();
    if (name.trim() !== '') {
      if (characters.includes(targetName)) {
        alert('μ΄λ―Έ μΆκ°λ μΊλ¦­ν°μλλ€.');
        return;
      }
      setCharacters(prev => [...prev, targetName]);
    }
    setName('');
  };

  const onSelectSuggestion = name => {
    if (characters.includes(name)) {
      alert('μ΄λ―Έ μΆκ°λ μΊλ¦­ν°μλλ€.');
      return;
    }
    setCharacters(prev => [...prev, name]);
  };

  const removeCharacter = name => {
    setCharacters(prev => prev.filter(item => item !== name));
  };

  const shuffleSuggestions = () => {
    console.log(suggestions);
    const arr = Array.from(suggestions);
    for (let idx = arr.length - 1; idx > 0; idx--) {
      const randInt = Math.floor(Math.random() * (idx + 1));
      const temporary = arr[idx];
      arr[idx] = arr[randInt];
      arr[randInt] = temporary;
    }
    console.log(arr);
    setSuggestions(arr);
  };

  return (
    <Flex flexDirection="column" gap="20px">
      <Flex flexDirection="column" align="flex-start" gap="5px">
        <Flex gap="5px">
          <Text fontSize="sm">* BARDμ μΊλ¦­ν° μ μ</Text>
          <Button colorScheme="yellow" size="xs" onClick={shuffleSuggestions}>
            <RepeatIcon />
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
          {suggestions.slice(0, 3).map((item, index) => (
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
      <Text fontWeight="bold">μΊλ¦­ν° μλ ₯</Text>
      <Flex flexDirection="row" gap="8px">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="μΊλ¦­ν°λ₯Ό μλ ₯νμΈμ. ex: μνμ€"
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
