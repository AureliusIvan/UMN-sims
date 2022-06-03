import { Box } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../Value/CoinContext';
import {
  Tooltip,
  Image,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import eat from '../asset/stat/lambung1.png';
import sleep from '../asset/stat/Energy.png';
import fun from '../asset/stat/fun_1.png';

function Bar(props) {
  const [color, setColor] = useState('green.400');
  useEffect(() => {
    if (props.value < 30) {
      setColor('red.500');
    } else {
      setColor('green.400');
    }
  }, [props.value]);
  return (
    <Tooltip label={props.title}>
      <Box
        onClick={props.function}
        border={'2px solid green'}
        marginInline="2px"
        borderRadius="50%"
      >
        <CircularProgress value={props.value} color={color}>
          <CircularProgressLabel>
            <Image
              border="2px solid green"
              bg="white"
              borderRadius="100%"
              width={8}
              my="auto"
              mx="auto"
              src={props.img}
            />
          </CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Tooltip>
  );
}

export function EatBar() {
  const { makan } = useContext(AllContext);
  return (
    <>
      <Bar title={`Fullness ${makan}%`} img={eat} value={makan} />
    </>
  );
}

export function SleepBar() {
  const { tidur } = useContext(AllContext);
  return (
    <>
      <Bar title={`Energy ${tidur}%`} img={sleep} value={tidur} />
    </>
  );
}

export function PlayBar() {
  const { main } = useContext(AllContext);
  return (
    <>
      <Bar title={`Happiness ${main}%`} img={fun} value={main} />
    </>
  );
}
