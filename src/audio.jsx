import React, { useState, useEffect, useContext } from 'react';
import { AllContext } from './components/Value/CoinContext';
import { Box } from '@chakra-ui/react';
// import useSound from 'use-sound';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const { playing, setPlaying } = useContext(AllContext);
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);
};

export default Player;
