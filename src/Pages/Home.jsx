import react from "react";
import { Line } from "../components/Grid/Line";
import { items } from "../components/Grid/elementList";
import { Grid, GridItem, Box, Center, Button, Popover, PopoverAnchor, PopoverArrow, PopoverBody, PopoverArrowProps, PopoverCloseButton, PopoverTrigger, PopoverContent, PopoverHeader } from "@chakra-ui/react";
import Pause from "../components/buttons/PauseBtn";
import Phone from "../components/phone/phoneMain";
import MapPop from "../components/buttons/MapPop";



function createList(x){
    return(
      <Line
        key = {x.id}
        first={x.first}
        second={x.second}
        third={x.third}
        fourth={x.fourth}
      />
    );
  }

function Home(props) {

    return (
      <div className="home">
        <Grid className="Grid" h='100vh' templateRows='repeat(5, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Pause />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <MapPop cafe={() => props.handleClick('cafe')}/>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
            
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
            <Phone/>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
    </Grid>
      </div>
    )
  }
  export default Home;
  