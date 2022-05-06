import react from 'react';
import { Line } from '../../components/Grid/Line';
import { items } from '../../components/Grid/elementList';
import {
  Grid,
  GridItem,
  Box,
  Center,
  Button,
  Image,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverArrowProps,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
} from '@chakra-ui/react';
import Pause from '../../components/buttons/PauseBtn';
import Phone from '../../components/phone/phoneMain';
import MapPop from '../../components/buttons/MapPop';
import Eat from './Eat/Eat';
import Currency from '../../components/buttons/Currency';


function Home(props) {
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
          <Pause />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Currency/>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <MapPop cafe={() => props.handleClick('cafe')} />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Button onClick={()=> props.handleClick('eat')}>Eat</Button>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>

        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Phone />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}></GridItem>
      </Grid>
    </div>
  );
}
export default Home;
