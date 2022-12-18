import { Button, Checkbox, Divider, Flex, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import BottomButton from '../components/BottomButton';
import Header from '../components/Header';

function SignUpPolicy() {
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  return (
    <>
      <Flex
        w="100%"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        flexBasis="0%"
        overflow="auto"
      >
        <Header title="Sign up" />
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          align="center"
          p="60px 24px"
        >
          <Flex
            flexDirection="column"
            align="flex-start"
            p="0px"
            gap="16px"
            w="calc(100vw - 48px)"
            maxW="calc(768px - 48px)"
          >
            <Checkbox
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={e =>
                setCheckedItems([e.target.checked, e.target.checked])
              }
            >
              Agree all
            </Checkbox>
            <Divider />
            <Stack spacing={1}>
              <Checkbox
                isChecked={checkedItems[0]}
                onChange={e =>
                  setCheckedItems([e.target.checked, checkedItems[1]])
                }
              >
                I agree to terms of service
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={e =>
                  setCheckedItems([checkedItems[0], e.target.checked])
                }
              >
                I agree to Privacy Policy
              </Checkbox>
            </Stack>
          </Flex>
          <BottomButton title="submit" />
        </Flex>
      </Flex>
    </>
  );
}

export default SignUpPolicy;
