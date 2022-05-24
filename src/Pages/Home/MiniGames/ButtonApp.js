import { useEffect, useState } from 'react';
import './App.css';
import Onecard from './comp/onecard';

const cardImages = [
  {"src": "/img/book.png",     matched:false},
  {"src": "/img/burger.png",   matched:false},
  {"src": "/img/cake.png",     matched:false},
  {"src": "/img/candy.png",    matched:false},
  {"src": "/img/chips.png",    matched:false},
  {"src": "/img/coin.png",     matched:false},
  {"src": "/img/macaron.png",  matched:false},
  {"src": "/img/Battery.png",  matched:false},
]

function App() {
  const [cards, setCards]= useState([])
  const [turns, setTurns] = useState(0)
  //const buat pilih kartu
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //start 
  useEffect( () => {
    shuffleCard()
  },[])

  //shufflecard
  const shuffleCard = () =>{
    const shuffledCard = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5) //untuk shuffle array
    .map((card) => ({...card, id: Math.random()}))

    setChoice1(null)
    setChoice2(null)
    setCards(shuffledCard)
    setTurns(0)
  }

  //buat pilihan yg pertama atau kedua
  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card)
  }

  //compare
  useEffect(() => {
    if(choice1 && choice2){
      setDisabled(true)
      if(choice1.src === choice2.src){
        setCards(prevCards=> {
          return prevCards.map(card =>{
            if(card.src === choice1.src)
            {
              return{...card, matched: true}
            }
            else
            {
              return card
            }
          })
        })
        newTurn()
      }
      else{
        setTimeout(() => newTurn(), 800)
      }
    }
  },[choice1, choice2])



  //setelah pilih 1 kartu
  const newTurn = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
<div className="App">
  <h1>Memory Card Minigames!</h1>
  <button onClick={shuffleCard}> New game</button>
  <button> Exit </button>

  <div className="card-pic" >
    {cards.map(card => (
      <Onecard 
      key={card.id} 
      card={card}
      handleChoice={handleChoice}
      flipped={card === choice1 || card === choice2 || card.matched}
      disabled={disabled}
       />
    ))}
  </div>
  <p>Turns:{turns}</p>
  </div>
  );
}

export default App;
