import { Flex, Img, others, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import BasicIllust from '../assets/illust.png';

function StoryView() {
  const sentenceRefs = useRef([]);
  const [sentences, setSentences] = useState([
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
    'dmdmddmdmmdmdmdm',
    'dlksfjdlkjfdslk',
  ]);

  const appearSentencesOnScroll = () => {
    sentenceRefs.current.forEach(l => {
      const p = l.getBoundingClientRect();
      const pTop = p.top;
      const pHeight = p.height;
      const pBottom = p.bottom;
      const windowHeight = window.innerHeight;

      if (pTop < windowHeight / 2 && pBottom > windowHeight / 2) {
        l.style.opacity = 1;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', appearSentencesOnScroll);

    return () => {
      window.removeEventListener('scroll', appearSentencesOnScroll);
    };
  }, []);

  return (
    <>
      <Flex
        w="100%"
        flexDirection="column"
        // p="0px"
        // flexGrow="1"
        // flexShrink="1"
        // overflow="auto"
      >
        <Header title="Read Story" isBack />
        <Flex
          flexDirection="column"
          alignItems="center"
          p="40px 24px 10px"
          margin="0 auto"
          padding="2rem"
          gap="24px"
        >
          <Img src={BasicIllust} />
          <Text>Scroll down slowly....</Text>
          {sentences.map((item, index) => (
            <Text
              ref={el => sentenceRefs.current.push(el)}
              transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
              opacity="0"
              marginBottom="5rem"
              key={index}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default StoryView;
