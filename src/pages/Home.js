import { EditIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import IconHome from '../assets/home.svg';

function Home() {
  return (
    <>
      <Flex
        pt="3.5rem"
        w="100%"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        flexBasis="0%"
        overflow="auto"
      >
        <Tabs isFitted variant="soft-rounded">
          <Box
            height="3.5rem"
            position="fixed"
            top="0px"
            w="100%"
            maxW="48rem"
          ></Box>
          <Flex pr="1.5rem" pl="1.5rem" pb="6.25rem">
            <Flex justify="center" align="flex-start">
              <TabPanels>
                <TabPanel>
                  우리가 튜토리얼같은 걸 어디다 적을 지 고민했었는데 여기다
                  간단히 작성 설명을 적은 후 들어가기를 누르는 게 어떨까 왜냐면
                  이 tabs는 느낌이 렌더링을 조건부로 걸어서
                  왔다갔다하는느낌(뇌피셜)이라서 바로 작성페이지를 띄우면 어색할
                  거 같달까?튜토리얼을 매일 보는 문제점이 있긴 하지만
                </TabPanel>
                <TabPanel>Hi Sulim</TabPanel>
                <TabPanel>Recent Stories</TabPanel>
                <TabPanel>About us</TabPanel>
              </TabPanels>
            </Flex>
          </Flex>
          <Flex
            position="fixed"
            w="100%"
            maxW="48rem"
            bottom="0rem"
            flexDirection="row"
            boxSizing="border-box"
            justify="center"
            m="0 auto"
            p="1.5rem"
          >
            <TabList w="71%">
              <Tab>
                <EditIcon />
              </Tab>
              <Tab>
                <img src={IconHome} alt="IconHome" />
              </Tab>
              <Tab>
                <SearchIcon />
              </Tab>
              <Tab>
                <HamburgerIcon />
              </Tab>
            </TabList>
          </Flex>
        </Tabs>
      </Flex>
    </>
  );
}

export default Home;
