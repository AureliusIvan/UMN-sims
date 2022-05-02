import { Box, Image, Popover, PopoverTrigger, Button, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react"
import pict from './asset/icon/Heart.png'

const place = "home"
// nanti pake if (home, school, market, dll)

function MyMap() {
    return (
        <Box alignSelf='right'>
            <Popover placement='top-start'>
                <PopoverTrigger>
                    <Button fontWeight='light'>Map</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Mapping />
                    <PopoverHeader fontSize='xl'>
                        My Map
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Click anywhere on the map to move location.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    )
}

function Mapping() {
    return (
        <Box>
            <Image src={pict} useMap='#mymap'/>
            <map name='mymap'>
                <area shape="circle" coords="337, 300, 100" target="_blank" href="#" />
            </map>
        </Box>
    )
}

export default MyMap;