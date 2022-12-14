import { Box, Button, Flex, Input, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

function CharacterInput() {
  const [tags, setTags] = useState([]);

  const handleKeyDown = e => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      const value = e.target.value;
      if (!value.trim()) {
        return;
      }
      setTags([...tags, value]);
      e.target.value = '';
    }
    // if (e.key !== 'Enter' && e.key !== 'Space') {
    //   return;
    // }
    // const value = e.target.value;
    // if (!value.trim()) {
    //   return;
    // }
    // setTags([...tags, value]);
    // e.target.value = '';
  };

  const removeTag = idx => {
    setTags(tags.filter((item, i) => i !== idx));
  };

  return (
    <>
      <Flex justify="center" align="center">
        <Flex w="500px" flexWrap="wrap" align="center" gap="1.8">
          {tags.map((tag, index) => {
            return (
              <Stack
                direction="row"
                // display="inline-block"
                // align="center"
                m="5px"
                p="0 5px"
                key={index}
                bgColor="blue.100"
                borderRadius="5px"
              >
                <Text>{tag}</Text>
                <Button
                  size="xs"
                  colorScheme="blackAlpha"
                  borderRadius="50%"
                  onClick={() => removeTag(index)}
                >
                  x
                </Button>
              </Stack>
            );
          })}
          <Input
            variant="flushed"
            flexGrow="1"
            type="text"
            placeholder="캐릭터 태그를 입력하세요"
            onKeyDown={handleKeyDown}
            // outline="none"
            // border="none"
            cursor="text"
          />
          {/* <Input
            type="text"
            display="inline-flex"
            onKeyDown={handleKeyDown}
            value={tags}
            outline="none"
            border="none"
            cursor="text"
          /> */}
        </Flex>
      </Flex>
    </>
  );
}

export default CharacterInput;
