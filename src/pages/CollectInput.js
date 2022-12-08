import { Box, Text, VStack } from '@chakra-ui/react';
import PhotoInput from '../components/PhotoInput';

function CollectInput() {
  return (
    <>
      <Box>
        <VStack>
          <Text>Input</Text>
          <PhotoInput />
        </VStack>
      </Box>
    </>
  );
}

export default CollectInput;
