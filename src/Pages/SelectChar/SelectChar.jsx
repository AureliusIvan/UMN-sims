import {
  Box,
  Image,
  Center,
  Button,
  Text,
  FormControl,
  FormControlOptions,
  FormControlProps,
  HStack,
  Flex,
  Tooltip,
} from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { AllContext } from '../../components/Value/CoinContext';
import { Char1, Char2, Char3, Char4 } from './skillChar';
import InfoModal from './charSkillModal';
import InputHere from './inputCharacter';
import next from '../../components/asset/icon/next.png';
import prev from '../../components/asset/icon/prev.png';
import mulai from '../../components/asset/icon/start.png';

import mainBG from '../../components/background/Charselect.png';
import mukbang from '../../components/background/Mukbangbg.png';

function SelectCharacter(props) {
  const { start, setStart } = useContext(AllContext);
  const { character, setCharacter } = useContext(AllContext);
  const { filled, setFilled } = useContext(AllContext);

  const [atribute, setAtribute] = useState(Char1);
  const handleCharPrev = () => {
    setCharacter(atribute.prev);
  };
  const handleCharNext = () => {
    setCharacter(atribute.next);
  };

  function handleStart() {
    setStart(true);
    console.log(start);
  }

  useEffect(() => {
    if (character === 1) {
      setAtribute(Char1);
    } else if (character === 2) {
      setAtribute(Char2);
    } else if (character === 3) {
      setAtribute(Char3);
    } else if (character === 4) {
      setAtribute(Char4);
    }
  }, [character]);

  return (
    <Box
      bgImage={mainBG}
      bgPos="center"
      bgSize={{ md: 'cover', base: 'contain' }}
      minH="100vh"
      w="100%"
    >
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <InputHere />
        <Flex transform={'translateY(-40px)'} flexDir="column" mb={20}>
          <Flex justifyContent="center" mt="50px" transform="translateX(22px)">
            <Flex flexDir="column" justifyContent="center" alignItems="center">
              <Box
                h="40px"
                minW="250px"
                fontSize="25px"
                borderRadius="10px"
                bgColor="red"
                color="white"
                textAlign="center"
                zIndex={1}
              >
                {atribute.tipe}
              </Box>
            </Flex>
            <InfoModal
              name={atribute.tipe}
              desc={atribute.desc}
              lore={atribute.lore}
            />
          </Flex>
          <HStack spacing="100px" justify="center" mt={{ sm: '50', base: '0' }}>
            <Image
              zIndex={5}
              src={prev}
              transform="translateY(180px)"
              width={{ md: '120px', base: '90px' }}
              position="relative"
              cursor="pointer"
              transition="0.3s"
              _hover={{ transform: 'scale(1.1) translateY(160px)' }}
              onClick={() => {
                handleCharPrev();
              }}
            />
            <Box></Box>
            <Image
              zIndex={5}
              src={next}
              transform="translateY(180px)"
              width={{ md: '120px', base: '90px' }}
              position="relative"
              cursor="pointer"
              _hover={{ transform: 'scale(1.1) translateY(160px)' }}
              transition="0.5s"
              onClick={() => {
                handleCharNext();
              }}
            />
          </HStack>
        </Flex>
      </Flex>
      <Tooltip label={'start game'}>
        <Button
          width="120px"
          height={'120px'}
          variant={'unstyled'}
          position="absolute"
          right={'0'}
          left="0"
          margin={'auto'}
          transform={{
            sm: 'translate(170px, 130px)',
            base: 'translate(130px, 210px)',
          }}
          mb="220px"
          onClick={() => {
            props.handleClick('home');
            handleStart();
          }}
          zIndex={10}
          cursor="pointer"
          disabled={filled ? false : true}
        >
          <Tooltip
            display={filled ? "none" : "block"}
            hasArrow
            label="ISI NAMA DAHULU"
            shouldWrapChildren
            mt="3"
          >
            <Image
              src={mulai}
              width="100px"
              height={'100px'}
              _hover={{ width: '120px', height: '120px' }}
              transition="0.5s"
            />
          </Tooltip>
        </Button>
      </Tooltip>
    </Box>
  );
}

export default SelectCharacter;
