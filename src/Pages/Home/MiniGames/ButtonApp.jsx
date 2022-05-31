import { useContext, useEffect, useState } from 'react';
import Onecard from './comp/onecard';
import { Box, Button } from '@chakra-ui/react';
import './game.css';
import { AllContext } from '../../../components/Value/CoinContext';
import { CoinFunction, StatFunction } from '../../../components/templateAndFunction/statCoinFunction';

const cardImages = [
  { src: '/img/book.png', matched: false },
  { src: '/img/burger.png', matched: false },
  { src: '/img/cake.png', matched: false },
  { src: '/img/candy.png', matched: false },
  { src: '/img/chips.png', matched: false },
  { src: '/img/coin.png', matched: false },
  { src: '/img/macaron.png', matched: false },
  { src: '/img/milk.png', matched: false },
];

function MiniGamestwo(props) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  
  //const buat pilih kartu
  const [choice1, setChoice1] = useState(null);
  const { tidur, setTidur } = useContext(AllContext);
  const [choice2, setChoice2] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const { coin, setCoin } = useContext(AllContext);
  const { main, setMain } = useContext(AllContext);

  //start
  useEffect(() => {
    shuffleCard();
  }, []);


  const done = () => {
    CoinFunction(coin, setCoin, 1000, 0);
    StatFunction(main, setMain, 8, 0);
    StatFunction(tidur, setTidur, 0, 5);
    props.handleClick('home')
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


  useEffect(()=>{
    console.log('test');
  },[])
  //setelah pilih 1 kartu
  const newTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <Box>
      <Box className="App">
        <h1>Memory Card Minigames!</h1>
         <p className="turns">Turns:{turns}</p>
        <Button className="gamebutton" onClick={shuffleCard}> New game</Button>
        <Button className="gamebutton" onClick={() => props.handleClick('home')}> Exit </Button>
        <Button className="gamebutton" disabled={turns < 8} onClick={done}> Done! </Button>
        <Box className="card-pic" h={'100%'} w="100%">
          {cards.map(card => (
            <Onecard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choice1 || card === choice2 || card.matched}
              disabled={disabled}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default MiniGamestwo;
