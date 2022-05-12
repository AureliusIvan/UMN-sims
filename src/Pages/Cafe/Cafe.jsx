import react from "react";
import { Line } from "../../components/Grid/Line";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import Pause from "../../components/buttons/PauseBtn";
import Phone from "../../components/phone/phoneMain";
import MapPop from "../../components/buttons/MapPop";




function Cafe(props) {
  return (
    <Box className="cafe">
      <Grid className="Grid" h='100vh' templateRows='repeat(5, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Pause />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <MapPop
            home={() => props.handleClick('home')}
            cafe={() => props.handleClick('cafe')}
            mall={() => props.handleClick('mall')}
            uni={() => props.handleClick('uni')}
          />
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
          <Button onClick={()=>props.handleClick('ngopi')}>Ngopi</Button>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Cafe;
