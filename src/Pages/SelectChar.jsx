import {
  Box,
  Stack,
  Input,
  Header,
  Image,
  Center,
  Flex,
  Button,
  Text,
  Grid,
  GridItem,
  FormControl,
  FormControlOptions,
  FormControlProps,
  Select,
  FormLabel,
} from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { CreateChar } from '../components/character/CharacterCard';
import { AllContext } from '../components/Value/CoinContext';

function DisplayChar() {
  return (
    <>
      <Box
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
      ></Box>
      <Box>
        <CreateChar />
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
  useEffect(() => {
    if (character == 1) {
      setAtribute(Char1);
    } else if (character == 2) {
      setAtribute(Char2);
    } else if (character == 3) {
      setAtribute(Char3);
    } else if (character == 4) {
      setAtribute(Char4);
    }
  }, [character]);

  return (
    <Box bgColor={'pink'} h="100%" w={'100%'}>
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(1, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Center mt="30px" gap="10px">
            <Input
              autoFocus
              bgColor="White"
              width="100%"
              maxW="350px"
              color="Black"
              variant="outline"
              placeholder="Masukan Nama"
              filter="drop-shadow(5px 5px #222)"
              onChange={event => {
                handleNama(event);
              }}
            />
            {nama}
            <br />
            <Select
              id=""
              autoFocus
              bgColor="White"
              width="100%"
              maxW="350px"
              color="Black"
              variant="outline"
              placeholder="Masukan jurusan"
              filter="drop-shadow(5px 5px #222)"
              pos="absolute"
              margin={'auto'}
              left="0"
              right={'0'}
              top="90px"
            >
              <option value={1}>Informatika</option>
              <option value={2}>Ilmu Komunikasi</option>
              <option value={3}>DKV</option>
            </Select>
          </Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Center>
            <Box
              padding="10px"
              display={{ base: 'none', md: 'block' }}
              h="300px"
              w="200px"
              bgColor="white"
              position="absolute"
              right="60%"
            >
              <Box>
                <Center>
                  <Box
                    pos="absolute"
                    h="40px"
                    w="110%"
                    fontSize="25px"
                    transform="translateY(-22px)"
                    borderRadius="10px"
                    bgColor="red"
                    color="white"
                    textAlign="center"
                  >
                    {atribute.name}
                  </Box>
                </Center>
                <Box>
                  <Text color="Blue">Lore: </Text>

                  <Box>
                    <Text color="Blue">Skill: </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Center
                pos="absolute"
                zIndex={1}
                h="40px"
                w="400px"
                display={{ base: 'block', md: 'none' }}
                fontSize="25px"
                transform="translateY(-22px)"
                borderRadius="10px"
                bgColor="red"
                color="white"
                textAlign="center"
                filter="drop-shadow(5px 5px #222)"
              >
                <Text></Text>
              </Center>
              <Button
                right="50%"
                transform="translateX(-120px)"
                top="40%"
                position="absolute"
                borderRadius="50%"
                h="70px"
                w="70px"
                bgColor="blue.100"
                zIndex={1}
                onClick={() => {
                  handleCharPrev();
                }}
              >
                {'<<'}
              </Button>

              <DisplayChar />
              <Button
                left="50%"
                transform="translateX(120px)"
                top="40%"
                position="absolute"
                borderRadius="50%"
                h="70px"
                w="70px"
                bgColor="blue.100"
                zIndex={1}
                onClick={() => {
                  handleCharNext();
                }}
              >
                {'>>'}
              </Button>
            </Box>
            <Button
              onClick={() => props.handleClick('home')}
              bgColor="blue.100"
              border="1px solid black"
              zIndex={100}
            >
              LET'S GO
            </Button>
          </Center>
        </GridItem>
        <GridItem padding="20px" className="gridItems" rowSpan={1} colSpan={1}>
          <Center></Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}></GridItem>
      </Grid>
    </Box>
  );
}

export default SelectCharacter;
