import { Flex, Img, others, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import BasicIllust from '../assets/illust.png';

function StoryView() {
  const sentenceRefs = useRef([]);
  const [sentences, setSentences] = useState([
    '예림이는 자신의 방 안에 서 있었어요.',
    '그녀는 렌즈와 이어폰을 착용하고 손에 들고 있는 책에 몰두하고 있었어요.',
    '그 방 안에는 수림이가 앉아있는 나무 의자 위에 백 개의 백 손가락 없이 다니는 작은 흰 개가 있었어요.',
    '예림이는 수림이를 보고 웃어댔어요.',
    '그녀는 그를 불렀고, 그가 바로 뛰어왔어요.',
    '예림이는 수림이의 꼬리를 꼭 잡고 그를 안아주며 애교를 건넸어요.',
    '그 뒤 예림이는 영주랑 함께 주방에 갔어요.',
    '거기서 저녁 식사를 하기 위해 목욕한 테이블과 음료와 유리가 놓여있 었어요.',
    '영주는 예림이를 보고 웃었어요.',
    '"어제 수림이가 너무 귀여웠지?"',
    '그녀가 물었어요.',
    '"그래, 너무 귀여웠어요."',
    '예림이는 웃으며 대답했어요.',
    '그들은 모두 그녀가 수림이랑 함께 놀면서 지냈던 일을 얘기하며 즐거운 시간을 보냈어요.',
    '밤이 되자 모두 그만 먹고 갔어요.',
    '예림이는 수림이를 불러서 주방으로 갔어요.',
    '그 곳에서 예림이와 수림이는 다시 한 번 놀아보려고 하는데, 영주는 예림이를 보고 웃었어요.',
    '그녀는 그 모습이 아주 귀여웠기 때문이었어요.',
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
