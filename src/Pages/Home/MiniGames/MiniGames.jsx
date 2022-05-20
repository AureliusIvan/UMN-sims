import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import MiniGamesCards from './MiniGamesCard';
import "./Minigames.css"

function MiniGames(props) {
  return (
    <>
   <MiniGamesCards/>
      <Button
        onClick={() => {
          props.handleClick('home');
        }}
      >
        Back
      </Button>
    </>
  );
}

export default MiniGames;
