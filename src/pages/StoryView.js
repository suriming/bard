import { Button, Flex, Image, Img, others, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import BasicIllust from '../assets/illust.png';

function StoryView() {
  const mock = {
    story: {
      ID: 4,
      CreatedAt: '2022-12-21T22:42:29.544+09:00',
      UpdatedAt: '2022-12-21T22:55:10.823+09:00',
      DeletedAt: null,
      title: '수림이의 일기장',
      body: '혁준과 수림은 채널 변경 버튼을 누르며 장난치는 모습을 보였습니다. 갑자기 화면에는 여러 가지 색깔이 들어간 바들로 가득한 채로 보였습니다. "와! 멋진 곳이네!" 기뻐하는 소리가 나오기 시작했습니다. \n\n그런 다음, 혁준과 수림은 비행기 창에 바라본 구름을 보였습니다. 구름은 좁은 길같이 늘어져 있고, 바다 주위는 밝게 빛나고 있었습니다. 갑자기 혁준과 수림은 멋진 경치를 바라보며 기뻐하는 모습이 보였습니다.\n\n그 다음, 꽃이 핀 꽃나무 앞에 사람 한 명이 마스크를 쓰고 서 있는 것을 보였습니다. 혁준과 수림은 이 사람이 누군지 궁금해하며 주변을 둘러봤습니다. 그 때 길가에 앉아 있던 고양이를 발견했습니다. 고양이는 그 누군가를 이리저리 쳐다보고 있었습니다. 고양이가 그 누군가가 네이마르라는 것을 알려준 것 같았습니다. \n\n마침내 혁준과 수림은 네이마르가 되기 위해 고민하며 모험하는 모습을 볼 수 있었습니다. 네이마르는 다양한 방법을 고민하며 생각하는 모습이 보였습니다. 그런데 벌써 고양이가 준비되어 있었습니다. 고양이는 네이마르에게 응원하며 춤을 추고 있었습니다.\n\n결국 네이마르는 끝까지 고민하며 꿈을 이루기 위해 노력하는 모습을 보여주었습니다. 혁준과 수림은 네이마르가 꿈을 이룰 수 있기를 기원하며, 고양이와 함께 손을 맞이하는 꿈을 보는 모습을 보았습니다.',
      summarized_body:
        '혁준과 수림은 바라본 구름과 꽃이 핀 꽃나무 앞에 있는 네이마르가 꿈을 이룰 수 있기를 기원하며, 고양이와 함께 손을 맞이하는 꿈을 보는 모습을 보았습니다.',
      image_url:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-O4Fi2zWyC2nV8o2zFmCKWMCx/user-NpANK4QM2pQWj3rJ7QagN9Xu/img-E7CwcygtvPibt6R64DJ2bXTa.png?st=2022-12-21T12%3A42%3A29Z&se=2022-12-21T14%3A42%3A29Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-21T07%3A04%3A48Z&ske=2022-12-22T07%3A04%3A48Z&sks=b&skv=2021-08-06&sig=qjUn9JHxNnA1UWBTXkS2wLbGg4SQpIqohKjkH8Hu%2BgE%3D',
      UserId: 1,
      User: {
        ID: 0,
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Email: '',
        Name: '',
      },
    },
  };
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
  const [imageoutput, setImageoutput] = useState('');
  const appearSentencesOnScroll = () => {
    sentenceRefs &&
      sentenceRefs.current.forEach(l => {
        // console.log(l);
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

  // const regex = /(".*?")\s|(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/;
  useEffect(() => {
    setSentences(
      mock.story.body
        // .replace(/\n/g, ' ')
        .split(/(".*?")\s|(\.|\?)\s/)
        // .split(/(".*?")\s|\.\s|\?\s/)
        .filter(Boolean)
    );
    setImageoutput(mock.story.image_url);
    console.log(sentences);
  }, [imageoutput]);

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
          overflowWrap="break-word"
        >
          <Img src={BasicIllust} />
          <Text>Scroll down slowly....</Text>
          {sentences.map((item, index) => (
            <Text
              ref={el => el && sentenceRefs.current.push(el)}
              transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
              opacity="0"
              marginBottom="5rem"
              key={index}
              textAlign="center"
              wordBreak="keep-all"
            >
              {item}
            </Text>
          ))}
          {/* <Image src={imageoutput} /> */}
          <Image
            src={
              'https://www.notion.so/an7ares/1216_Image-Generation-Experiments-abc13deeadab48d0a0b476b2ac258414#2cc69a3cd0b34c6ea2ef46e9e66527ec'
            }
          />
          <Button>저장하기</Button>
        </Flex>
      </Flex>
    </>
  );
}

export default StoryView;
