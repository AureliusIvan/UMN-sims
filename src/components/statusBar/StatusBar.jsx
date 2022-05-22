import { Box } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AllContext } from '../Value/CoinContext';
import { Progress, CircularProgress, CircularProgressLabel  } from '@chakra-ui/react';

function Bar(props) {
  return (
    <Box border={'2px solid green'} marginInline='5px' borderRadius='50%'>
      <CircularProgress value={props.value} color="green.400">
        <CircularProgressLabel>{props.value}%</CircularProgressLabel>
      </CircularProgress>
      {props.content}
    </Box>
  );
}


export function EatBar() {
  const { makan, setMakan } = useContext(AllContext);
  return (
    <>
      <Bar value={makan} />
    </>
  );
}

export function SleepBar() {
    const { tidur, setTidur } = useContext(AllContext);
    return (
      <>
        <Bar value={tidur} />
      </>
    );
  }
  export function PlayBar() {
    const { main, setMain } = useContext(AllContext);
    return (
      <>
        <Bar value={main} />
      </>
    );
  }