import React, { useContext, useEffect, useRef, useState } from 'react';
import { useToast, Grid, GridItem, Box, Button, Text, Center, Image } from '@chakra-ui/react';
import MapPop from '../../components/buttons/MapPop';
import Currency from '../../components/buttons/Currency';
import RotiPanggang from '../../components/template/tempWarnPopUp';
import { AllContext } from '../../components/Value/CoinContext';
// import { CreateChar } from '../../components/character/CharacterCard';
import CharacterModule from '../../components/character/Card';
import WheaterApp from '../../components/background/Weather';
import StatusGroup from '../../components/statusBar/StatusBarGroup';
import BgPagi from './bg/Pagi.png';
import BgSiang from './bg/Siang.png';
import BgSore from './bg/Sore.png';
import BgMalem from './bg/Malem.png';
import { Xp } from '../../components/statusBar/Xp';
import Notif from './testNotif';

import lala from "../../components/asset/gif/eat.gif"

function Home(props) {
  const { nama, setNama } = useContext(AllContext);
  const { coin, setCoin } = useContext(AllContext);
  const { makan, setMakan } = useContext(AllContext);
  const { tidur, setTidur } = useContext(AllContext);
  const { jurusan } = useContext(AllContext);
  const { bghome, setBgHome } = useContext(AllContext);
  const { hour, SetHour } = useContext(AllContext);
  
  function changeBg() {
    if (hour >= 7 && hour < 12) {
      return BgPagi;
    } else if (hour >= 12 && hour < 15) {
      return BgSiang;
    } else if (hour >= 15 && hour < 17) {
      return BgSore;
    } else if (hour >= 18 || hour < 7) {
      return BgMalem;
    }
  }

  //useEffect buat notif
  //notif uang jajan

  // const[first, setFirst] = useState(true);

  // const toast = useToast();
  // useEffect(() => {
  //   if (first) 
  //     setFirst(false);

  //   if (!first) {
  //     toast({
  //       description: "koin nambah",
  //       status: "success",
  //       position : "bottom-start",
  //       isClosable: true,
  //     })
  //   }
  // }, [coin]);
  
  const add = x => {
    setCoin(coin + x);
  };

  return (
    <Box
      backgroundImage={changeBg}
      transition="0.5s"
      bgRepeat="no-repeat"
      bgSize={'cover'}
      className="home"
    >
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Center>
            <Text>
              
            </Text>
          </Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Box>
            <Currency />
            <StatusGroup />
          </Box>
        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <MapPop
            home={() => props.handleClick('home')}
            cafe={() => props.handleClick('cafe')}
            mall={() => props.handleClick('mall')}
            uni={() => props.handleClick('uni')}
          />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Button onClick={() => props.handleClick('eat')}>Eat</Button>
        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Button
            onClick={() => {
              props.handleClick('Minigames');
            }}
          >
            Minigames
          </Button>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Box zIndex={-1} >
            <CharacterModule />
          </Box>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <RotiPanggang title="tes toast" content="ini roti panggang" />
          <Button onClick={() => {
                            setMakan(makan+10);
                            setTidur(tidur-10);
                          }}
          >+ makan - tidur</Button>
          <Button onClick={() => setCoin(coin+500)}>+ coin</Button>
        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
      </Grid>
    </Box>
  );
}
export default Home;
