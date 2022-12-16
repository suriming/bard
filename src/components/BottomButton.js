import { Button } from '@chakra-ui/react';

function BottomButton({ title, onClick }) {
  return (
    <Button
      colorScheme="yellow"
      w="calc(100vw - 48px)"
      maxW="calc(768px - 48px)"
      bottom="40px"
      position="fixed"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

export default BottomButton;
