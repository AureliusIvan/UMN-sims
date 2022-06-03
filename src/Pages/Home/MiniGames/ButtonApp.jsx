import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Image,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import './game.css';
import { AllContext } from '../../../components/Value/CoinContext';
import {
  CoinFunction,
  StatFunction,
  CheckStatFull
} from '../../../components/templateAndFunction/statCoinFunction';
import book from './img/book.png';
import burger from './img/burger.png';
import cake from './img/cake.png';
import candy from './img/candy.png';
import chips from './img/chips.png';
import coin from './img/Coin.png';
import macaron from './img/macaron.png';
import milk from './img/milk.png';
import './comp/onecard.css';
import cardimg from './img/card.png';
import BackgroundIMG from '../../Home/Eat/food/makanbg.png';
const cardImages = [
  { src: book, matched: false },
  { src: burger, matched: false },
  { src: cake, matched: false },
  { src: candy, matched: false },
  { src: chips, matched: false },
  { src: coin, matched: false },
  { src: macaron, matched: false },
  { src: milk, matched: false },
];

function Onecard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <GridItem rowSpan={1} colSpan={1} className="card">
      <Box className={flipped ? 'flipped' : ''}>
        <Image
          width={'100px'}
          height="100px"
          border={'3px solid black'}
          borderRadius="10px"
          className="depan"
          src={card.src}
          alt="card depan"
        />
        <Image
          width={'100px'}
          height="100px"
          border={'3px solid black'}
          borderRadius="10px"
          className="belakang"
          src={cardimg}
          onClick={handleClick}
          alt="card belakang"
        />
      </Box>
    </GridItem>
  );
}

function MiniGamestwo(props) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //const buat pilih kartu
  const [choice1, setChoice1] = useState(null);
  const { tidur, setTidur } = useContext(AllContext);
  const [choice2, setChoice2] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const { coin, setCoin } = useContext(AllContext);
  const { main, setMain, countMain, setCountMain } = useContext(AllContext);

  //start
  useEffect(() => {
    shuffleCard();
  }, []);

  const done = () => {
    CoinFunction(coin, setCoin, 500, 0);
    StatFunction(main, setMain, 30, 0);
    StatFunction(tidur, setTidur, 0, 5);
    
    CheckStatFull(main, countMain, setCountMain);
    props.handleClick('home');
  };

  //shufflecard
  const shuffleCard = () => {
    const shuffledCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5) //untuk shuffle array
      .map(card => ({ ...card, id: Math.random() }));

    setChoice1(null);
    setChoice2(null);
    setCards(shuffledCard);
    setTurns(0);
  };

  //buat pilihan yg pertama atau kedua
  const handleChoice = card => {
    choice1 ? setChoice2(card) : setChoice1(card);
  };

  //compare
  useEffect(() => {
    if (choice1 && choice2) {
      setDisabled(true);
      if (choice1.src === choice2.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choice1.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        newTurn();
      } else {
        setTimeout(() => newTurn(), 800);
      }
    }
  }, [choice1, choice2]);
  //setelah pilih 1 kartu
  const newTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <VStack
      width={'100%'}
      height="100vh"
      overflow={'hidden'}
      padding="20px"
      className="MinigamesPage"
      textAlign={'center'}
      bgImage={BackgroundIMG}
      bgSize={{ md: 'cover', base: 'contain' }}
      bgPos="center"
    >
      <Text
        bgGradient="linear(to-l, rgb(255, 128, 128), rgb(235, 83, 83))"
        bgColor="red.400"
        width={'400px'}
        borderRadius="20px"
        textAlign="center"
        color="white"
      >
        Memory Card Minigames!
      </Text>
      <HStack>
        <Button
          bgGradient="linear(to-l, rgb(255, 128, 128), rgb(235, 83, 83))"
          border={'2px solid white'}
          color="white"
          fontWeight={'thin'}
          className="gamebutton"
          onClick={shuffleCard}
        >
          {' '}
          New game
        </Button>
        <Button
          bgGradient="linear(to-l, rgb(255, 128, 128), rgb(235, 83, 83))"
          border={'2px solid white'}
          color="white"
          fontWeight={'thin'}
          className="gamebutton"
          onClick={() => props.handleClick('home')}
        >
          {' '}
          Exit{' '}
        </Button>
        <Button
        bgColor={"red.600"}
          border={'2px solid white'}
          color="white"
          fontWeight={'thin'}
          className="gamebutton"
          disabled={turns < 5}
          onClick={done}
        >
          {' '}
          Done!{' '}
        </Button>
      </HStack>
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={2}
        className="card-pic"
        h={'100px'}
        w="400px"
        margin={'auto'}
        left="0"
        right={'0'}
        top="150px"
        bottom={0}
      >
        {cards.map(card => (
          <Onecard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choice1 || card === choice2 || card.matched}
            disabled={disabled}
          />
        ))}
      </Grid>
      <Text
        pos={'absolute'}
        bottom={'10px'}
        bgGradient="linear(to-r, red.500, blue.700)"
        bgColor="red.400"
        width={'400px'}
        borderRadius="20px"
        textAlign="center"
        color="white"
        className="turns"
      >
        Turns:{turns}
      </Text>
    </VStack>
  );
}

export default MiniGamestwo;
