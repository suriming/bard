import { Button } from '@chakra-ui/react';

function BottomButton({ title, onClick }) {
  return (
    <Button
      colorScheme="yellow"
      w="calc(100vw - 48px)"
      maxW="calc(768px - 48px)"
      bottom="40px"
      position="fixed"
      border="0.7px solid"
      borderRadius="6px"
      onClick={onClick}
      boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
    >
      {title}
    </Button>
  );
}

export default BottomButton;
