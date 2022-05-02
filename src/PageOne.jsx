import { Box, Stack, Input, Header, Image, Center , Flex, Button, Text, Grid, GridItem } from '@chakra-ui/react';
import React from "react";

class Car extends React.Component {
    Boy = () => {
        this.setState({ img: require('./components/asset/avatar/boy.png'),
                        name: 'Boy',
                        tipe: 'Kang mukbang',
                        desc:'Menambah kapasitas perut sebanyak +20%',
                        lore:'Diceritakan bahwa Kang mukbang sangat suka makan, bahkan semenjak masih menjadi embrio. Kemampuannya ini mengantarkannya menjuarai lomba makan tingkat kampung.',
                        onclick: this.Girl
                      
    });}
    Girl = () => {
        this.setState({img: require('./components/asset/avatar/girl.png'),
                        name: 'girl',
                        tipe: 'Anak Rajin',
                        desc: 'Mepercepat belajar hingga +20%',
                        lore:'Anak Rajin, Begitulan orang-orang memanggilnya. Panggilan tersebut didapatnya karena dia setiap harinya belajar ngoding (termasuk hari libur).',
                        onclick: this.Boy
                      
    });}

    constructor(props) {
      super(props);
      this.state = {
                    img: require('./components/asset/avatar/boy.png'),
                    name: 'Boy',
                    tipe: 'Kang mukbang',
                    desc:'Menambah kapasitas perut sebanyak +20%',
                    lore:'Diceritakan bahwa Kang mukbang sangat suka makan, bahkan semenjak masih menjadi embrio. Kemampuannya ini mengantarkannya menjuarai lomba makan tingkat kampung.',
                    onclick: this.Girl
      };
    }

    render() {
      return (
          <Box>
              <Center>
                  <Box padding='10px' display={{base:'none',md:'block'}} h='300px' w='200px' bgColor='white' position='absolute' right='60%'>
                        <Box>
                            <Center>
                            <Box pos='absolute' h='40px' w='110%' fontSize='25px' transform='translateY(-22px)' borderRadius='10px' bgColor='red' color='white' textAlign='center'><Text>{this.state.tipe}</Text></Box>
                            </Center>
                            <Box><Text color='Blue'>Lore: </Text>
                            <Text>{this.state.lore}</Text>
                            <Box><Text color='Blue'>Skill: </Text>
                            <Text>{this.state.desc}</Text></Box>
                            </Box>
                        </Box>
                  </Box>
            <Box transform={{base:0, md:'translateX(50%)'}}>
              <Button onClick={this.state.onclick} right='50%' transform='translateX(-120px)' top='40%' position='absolute'>{"<<"}</Button>
              <Image boxSize='400px' positon='absolute' objectFit='Cover'  src={this.state.img}/>
              <Button onClick={this.state.onclick} left='50%' transform='translateX(120px)' top='40%'  position='absolute'>{">>"}</Button>
              </Box>
              </Center>
          </Box>
      );
    }
  }

function PageOne(props) {
	return (
		<Box
        backgroundColor='teal'
        position='fixed'
        width='100%'
        height='100%'
        zIndex='100'
        >
        <Grid className="Grid" h='10vh' templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
        <Center mt='30px' gap='10px'>
        <Input width='100%' maxW='400px' color='white'  variant='outline' placeholder='Masukan Nama' />
        <Button>✔</Button>
        </Center>
        </GridItem>

    </Grid>
    <Grid className="Grid" h='60vh' templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
        <Center>
        <Car/>
        </Center>
        </GridItem>
    </Grid>
    <Grid className="Grid" h='20vh' templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        {props.first}
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center gap='10px'>
        <Button>Setting</Button>
        <Button 
        width='100px'
        height='100px'
        borderRadius='50%'
        onClick={props.play}
        pointerEvents='all'
        >Play</Button>
        <Button>Credit</Button>
        </Center>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        <Center>
        {props.third}
        </Center>
        </GridItem>
    </Grid>
        </Box>
	)
}



export default PageOne;