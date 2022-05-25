import {
  Box,
  Input,
  Image,
  Center,
  Button,
  Text,
  Grid,
  GridItem,
  FormControl,
  FormControlOptions,
  FormControlProps,
  Select,
  VStack,
  HStack,
  Flex,
  Divider
} from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { CreateChar } from '../components/character/CharacterCard';
import { AllContext } from '../components/Value/CoinContext';
import CharacterModule from '../components/character/Card';

import next from "../components/asset/icon/next.png"
import prev from "../components/asset/icon/prev.png"

function DisplayChar() {
  return (
    <>
      {/* <Box
        pos="absolute"
        bgColor="purple.300"
        transform="rotate(-40deg) translateY(-10px) translateX(-180px)"
        h="200px"
        w="400px"
        borderRadius="50%"
      ></Box>
      <Box
        pos="absolute"
        bgColor="red.300"
        transform="rotate(40deg) translateY(140px) translateX(-100px)"
        h="100px"
        w="100px"
        borderRadius="50%"
      ></Box>
      <Box
        pos="absolute"
        bgColor="yellow.200"
        transform="translateY(140px) translateX(-140px)"
        h="170px"
        w="120px"
        borderRadius="50%"
      ></Box>
      <Box
        pos="absolute"
        bgColor="blue.200"
        transform="translateY(300px) translateX(-120px)"
        h="120px"
        w="270px"
        borderRadius="50%"
      ></Box> */}
      <Box>
        <CharacterModule left="0" />
      </Box>
    </>
  );
}

const Char1 = {
  name: 'Vera',
  tipe: 'Kang mukbang',
  desc: '[King of Mukbang] Menambah kapasitas perut sebanyak +20%',
  lore: 'Diceritakan bahwa Kang mukbang sangat suka makan, bahkan semenjak masih menjadi embrio. Kemampuannya ini mengantarkannya menjuarai lomba makan tingkat kampung.',
  next: 2,
  prev: 4,
};

const Char2 = {
  name: 'Fiona',
  tipe: 'Gamers',
  desc: '[Goddess of gaming] Menambah stat bermain sebanyak +20%',
  lore: 'Sewaktu SMA, Gamers pernah menjuarai lomba e-sport, sejak saat itu gamers menyadari potensi besar dalam dirinya untuk menjadi seorang gamers profesional.',
  next: 3,
  prev: 1,
};

const Char3 = {
  name: 'Jaka',
  tipe: 'Holkay',
  desc: '[Unlimited Money] Memperoleh 20% lebih banyak uang jajan setiap hari',
  lore: 'Anak Rajin, Begitulan orang-orang memanggilnya. Panggilan tersebut didapatnya karena dia setiap harinya belajar ngoding (termasuk hari libur).',
  next: 4,
  prev: 2,
};

const Char4 = {
  name: 'girl',
  tipe: 'Anak Rajin',
  desc: '[Proficient Learner] Mepercepat belajar hingga +20%',
  lore: 'Anak Rajin, Begitulan orang-orang memanggilnya. Panggilan tersebut didapatnya karena dia setiap harinya belajar ngoding (termasuk hari libur).',
  next: 1,
  prev: 3,
};

function SelectCharacter(props) {
  const { nama, setNama } = useContext(AllContext);
  const { jurusan, setJurusan } = useContext(AllContext);
  const { character, setCharacter } = useContext(AllContext);
  const handleNama = event => {
    setNama(event.target.value);
  };

  const [atribute, setAtribute] = useState(Char1);
  const handleCharPrev = () => {
    setCharacter(atribute.prev);
  };
  const handleCharNext = () => {
    setCharacter(atribute.next);
  };

  const [hover, setHover] = useState(false);

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
        <VStack spacing={5} mt={8}>
          <Input
            autoFocus
            bgColor="White"
            width="200%"
            maxW="350px"
            color="Black"
            variant="outline"
            placeholder="Masukan Nama"
            filter="drop-shadow(3px 3px 2px #222)"
            onChange={event => {
              handleNama(event);
            }}
          />
          {/* {nama} */}
          <Select
            id=""
            autoFocus
            bgColor="White"
            width="200%"
            maxW="350px"
            color="Black"
            variant="outline"
            placeholder="Masukan jurusan"
            filter="drop-shadow(3px 3px 2px #222)"
            cursor="pointer"
          >
            <option value={1}>Informatika</option>
            <option value={2}>Ilmu Komunikasi</option>
            <option value={3}>DKV</option>
          </Select>
        </VStack>
        <Flex flexDir="column" mb={20}>
          <Flex 
            // transform={{base:"none", md:"translateX(-50px)"}}
            flexDir="column" 
            alignItems="center" 
            justifyContent="center"
            mr={{base:"none", md:"10px"}}
            mt={{base: 12, md:"none"}}
          >
            <Box
              h="40px"
              minW={{md:"230px", base:"300px"}}
              fontSize="25px"
              borderRadius="10px"
              bgColor="red"
              color="white"
              textAlign="center"
              zIndex={1}
            >
              {atribute.tipe}
            </Box>
            <Box 
              maxW={{md:"200px", base:"250px" }}
              minH={{md:"300px"}}
              bgColor="white"
              borderRadius="10px"
              px={3}
              py={4}
              textAlign="center"
              mt="-2"
              sIndex={0}
            >
              <Text color="blue" align="left" display={{base:"none", md:"none"}}>Skill :</Text>
              <Text>{atribute.desc}</Text>
              <Box display={{base:"none", md:"none"}}>
                <Divider my={{md:3}} />
                <Text color="blue" align="left" >Lore :</Text>
                <Text>{atribute.lore}</Text>
              </Box>
            </Box>
          </Flex>
          <HStack spacing="100px" justify="center">
            <Image 
              zIndex={5}
              src={prev} 
              width={{md:"120px", base:"90px" }}
              position="relative"
              cursor="pointer"
              transition="0.3s"
              _hover={{transform:"scale(1.1)"}}
              onClick={() => {
                handleCharPrev();
              }}
            />
            <Box>
              <DisplayChar />
            </Box>
            <Image 
              zIndex={5}
              src={next}
              width={{md:"120px", base:"90px" }}
              position="relative"
              cursor="pointer"
              _hover={{transform:"scale(1.1)"}}
              transition="0.3s"
              onClick={() => {
                handleCharNext();
              }}
            />
          </HStack>
        </Flex>
        <Button
          transform="translateY(60px)"
          mb="40px"
          onClick={() => props.handleClick('home')}
          bgColor="blue.100"
          border="1px solid black"
          transition="0.2s"
          zIndex={10}
        >
          LET'S GO
        </Button>
      </Flex>
    </Box>
  )
}

export default SelectCharacter;
