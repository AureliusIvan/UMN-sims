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
} from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { AllContext } from '../../components/Value/CoinContext';
import { Char1, Char2, Char3, Char4 } from './skillChar';
import InfoModal from './charSkillModal';
import InputHere from './inputCharacter';
import next from '../../components/asset/icon/next.png';
import prev from '../../components/asset/icon/prev.png';
import mulai from '../../components/asset/icon/start.png';

function SelectCharacter(props) {
  const { start, setStart } = useContext(AllContext);
  const { character, setCharacter } = useContext(AllContext);

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
    <Box bgColor="pink" minH="100vh" w="100%">
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <InputHere />
        <Flex flexDir="column" mb={20}>
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
        <Image
          src={mulai}
          width="100px"
          transform={{
            sm: 'translate(250px, 180px)',
            base: 'translate(130px, 210px)',
          }}
          mb="220px"
          onClick={() => {
            props.handleClick('home');
            handleStart();
          }}
          _hover={{ transform: 'translate(250px, 180px) scale(1.2)' }}
          transition="0.4s"
          zIndex={10}
          cursor="pointer"
        />
      </Flex>
    </Box>
  );
}

export default SelectCharacter;
