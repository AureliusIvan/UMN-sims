import React, { useContext} from 'react';
import { Line } from '../../components/Grid/Line';
import { items } from '../../components/Grid/elementList';
import {
  Grid,
  GridItem,
  Box,
  Button,
  Text,
  Center
} from '@chakra-ui/react';
import Pause from '../../components/buttons/PauseBtn';
import Phone from '../../components/phone/phoneMain';
import MapPop from '../../components/buttons/MapPop';
import Eat from './Eat/Eat';
import Currency from '../../components/buttons/Currency';
import RotiPanggang from "../../components/template/tempWarnPopUp"
import Coin from '../../components/Value/Coin';
import { AllContext } from '../../components/Value/CoinContext';
import { CreateChar } from '../../components/character/CharacterCard';
import WheaterApp from '../../components/background/Weather';
import { EatBar } from '../../components/statusBar/StatusBar';
import StatusGroup from '../../components/statusBar/StatusBarGroup';


function Home(props) {
  const {nama, setNama} = useContext(AllContext);
  const {coin, setCoin} = useContext(AllContext);
  const {jurusan, setJurusan} = useContext(AllContext);
  const add = (x) =>{
    setCoin(coin+x);
  }
  return (
    <div className="home">
      <Grid
        className="Grid"
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Center><Text >Hello {nama} dari jurusan {jurusan}</Text></Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Currency />
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
          <Button onClick={()=> props.handleClick('eat')}>Eat</Button>
        </GridItem>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <StatusGroup/>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Button onClick={()=>{props.handleClick('Minigames')}}>Minigames</Button>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Box zIndex={-1}>
          <CreateChar/>
          </Box>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <RotiPanggang 
            title = "tes toast"
            content = "ini roti panggang"
          />
        </GridItem>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Button onClick={()=>{add(10)}}></Button>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <WheaterApp/>
        </GridItem>
      </Grid>
    </div>
  );
}
export default Home;
