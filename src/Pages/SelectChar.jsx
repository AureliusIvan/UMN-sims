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
import React, { useState, useContext } from 'react';
import { AllContext } from '../components/Value/CoinContext';

function SelectChar(props) {
  const { nama, setNama } = useContext(AllContext);
  const { jurusan, setJurusan } = useContext(AllContext);
  const [disable, setDisable] = useState(false);
  const handleSubmit = () => {
    setDisable(true);
  };
  const handleJurusan = e => {
    setJurusan(e.target.value);
    console.log(jurusan);
  };

  class Car extends React.Component {
    Boy = () => {
      this.setState({
        img: require('../components/asset/avatar/boy.png'),
        name: 'Boy',
        tipe: 'Kang mukbang',
        desc: '[King of Mukbang] Menambah kapasitas perut sebanyak +20%',
        lore: 'Diceritakan bahwa Kang mukbang sangat suka makan, bahkan semenjak masih menjadi embrio. Kemampuannya ini mengantarkannya menjuarai lomba makan tingkat kampung.',
        onclick: this.Girl,
      });
    };
    Girl = () => {
      this.setState({
        img: require('../components/asset/avatar/girl.png'),
        name: 'girl',
        tipe: 'Anak Rajin',
        desc: '[Proficient Learner] Mepercepat belajar hingga +20%',
        lore: 'Anak Rajin, Begitulan orang-orang memanggilnya. Panggilan tersebut didapatnya karena dia setiap harinya belajar ngoding (termasuk hari libur).',
        onclick: this.Boy,
      });
    };

    constructor(props) {
      super(props);
      this.state = {
        img: require('../components/asset/avatar/boy.png'),
        name: 'Boy',
        tipe: 'Kang mukbang',
        desc: '[King of Mukbang] Menambah kapasitas perut sebanyak +20%',
        lore: 'Diceritakan bahwa Kang mukbang sangat suka makan, bahkan semenjak masih menjadi embrio. Kemampuannya ini mengantarkannya menjuarai lomba makan tingkat kampung.',
        onclick: this.Girl,
      };
    }

    render() {
      return (
        <Box
          top="0"
          left="0"
          right="0"
          pos="absolute"
          bgColor="yellow.500"
          zIndex="100"
          w="100%"
          h="80vh"
        >
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
                  onChange={e => {setNama(e.target.value)}}
                  isDisabled={disable}
                />
                <Button
                  onClick={handleSubmit}
                  filter="drop-shadow(5px 5px #222)"
                  color="green.500"
                >
                  ✔
                </Button>
              </Center>
            </GridItem>
            <GridItem className="gridItems" rowSpan={1} colSpan={1}>
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
                isDisabled={disable}
                pos="absolute"
                onChange={handleJurusan}
                value={jurusan}
              >
                <option value={1}>Informatika</option>
                <option value={2}>Ilmu Komunikasi</option>
                <option value={3}>DKV</option>
              </Select>
            </GridItem>
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
                        <Text>{this.state.tipe}</Text>
                      </Box>
                    </Center>
                    <Box>
                      <Text color="Blue">Lore: </Text>
                      <Text>{this.state.lore}</Text>
                      <Box>
                        <Text color="Blue">Skill: </Text>
                        <Text>{this.state.desc}</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box transform={{ base: 0, md: 'translateX(50%)' }}>
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
                    <Text>{this.state.tipe}</Text>
                  </Center>
                  <Button
                    onClick={this.state.onclick}
                    right="50%"
                    transform="translateX(-120px)"
                    top="40%"
                    position="absolute"
                    borderRadius="50%"
                    h="70px"
                    w="70px"
                    bgColor="blue.100"
                    zIndex={1}
                  >
                    {'<<'}
                  </Button>
                  <Box
                    pos="absolute"
                    bgColor="purple.300"
                    transform="rotate(-40deg) translateY(100px) translateX(-70px)"
                    h="200px"
                    w="400px"
                    borderRadius="50%"
                    zIndex={-1}
                  ></Box>
                  <Box
                    pos="absolute"
                    bgColor="red.300"
                    transform="rotate(40deg) translateY(10px) translateX(70px)"
                    h="100px"
                    w="100px"
                    borderRadius="50%"
                    zIndex={-1}
                  ></Box>
                  <Box
                    pos="absolute"
                    bgColor="yellow.200"
                    transform="translateY(190px) translateX(230px)"
                    h="170px"
                    w="120px"
                    borderRadius="50%"
                    zIndex={-1}
                  ></Box>
                  <Box
                    pos="absolute"
                    bgColor="blue.200"
                    transform="translateY(300px) translateX(60px)"
                    h="120px"
                    w="270px"
                    borderRadius="50%"
                    zIndex={-1}
                  ></Box>

                  <Image
                    boxSize="400px"
                    positon="absolute"
                    objectFit="Cover"
                    src={this.state.img}
                    filter="drop-shadow(10px 5px #222)"
                  />

                  <Button
                    onClick={this.state.onclick}
                    left="50%"
                    transform="translateX(120px)"
                    top="40%"
                    position="absolute"
                    borderRadius="50%"
                    h="70px"
                    w="70px"
                    bgColor="blue.100"
                    zIndex={1}
                  >
                    {'>>'}
                  </Button>
                </Box>
              </Center>
            </GridItem>
            <GridItem
              padding="20px"
              className="gridItems"
              rowSpan={1}
              colSpan={1}
            >
              <Center>
                <Button
                  onClick={() => props.handleClick('home')}
                  bgColor="blue.100"
                  border="1px solid black"
                  isDisabled={disable ? false : true}
                >
                  LET'S GO
                </Button>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      );
    }
  }

  return (
    <Box zIndex={1} bgColor="yellow.500" w="100%" h="100vh">
      <Car />
    </Box>
  );
}

export default SelectChar;
