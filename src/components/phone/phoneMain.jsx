import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton } from "@chakra-ui/react"
import { Image, Circle, Flex, Progress, Text, Box, } from "@chakra-ui/react"
import { useState, useEffect } from "react";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // ga ngaruh ??

import HomeScreen from "./homeScreen";
import phone from '../asset/icon/hp1.png';
import phoneHover from '../asset/icon/hp2.png';



function Phone() {
	const [hover, setHover] = useState(false);

    return (
        <Box bottom={0} position='fixed'>
            <Popover placement='top-start'>
                <PopoverTrigger>
					<Box>
						<Image
							onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}
							src={!hover ? phone : phoneHover} 
							width={{base:'20%', sm:'12%', md:'6%'}}
							cursor='pointer'
						/>
					</Box>
                </PopoverTrigger>
                <PopoverContent width="170%" mb="-20px" borderRadius={25} color='white' bg='blue.800' borderColor='blue.800'>
                    <Flex justifyContent='center' py={2} >
						<Circle size='15px' bg='black'></Circle>
						<Circle alignSelf='center' ml={2} size='5px' bg='black'></Circle>
					</Flex>
					<Content color='black' />
                    <PopoverCloseButton/>
                </PopoverContent>
            </Popover>
        </Box>
    )
}

function Content () {
	const [load, setLoad] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoad(false), 2000);
	}, [])

	return (
		<Box
			overflowY='scroll'
			height='420px'
			mx={2}
			mb={2}
            backgroundColor='gray.200'
			p={3}
			borderRadius={20}
			color='black'
		>
			{load ? (
				<Flex my='50%' direction='column' align='center' justifyContent='flex-end'>
					<Text >Loading</Text>
					<Progress w='60%' size='sm' isIndeterminate />
				</Flex>
			) : 
			( <HomeScreen /> )
			}
        </Box>
	)
}



export default Phone;