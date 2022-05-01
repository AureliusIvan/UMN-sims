import { Flex, Text, Spacer, Divider, Button, Box } from "@chakra-ui/react";

function PopTemplate(props){
    return(
        <Flex
			bg='rgba(0,0,0, 0.6)'
			backdropFilter='auto'
			backdropBlur='1px'
			height='100%'
			width='100%'
			position='absolute'
			top={0}
			justifyContent='center'
			alignItems='center'
            zIndex={20}
            overflow='hidden'
		>
			<Box
				backgroundColor='beige'
				height='auto'
				width='70%'
				ml='auto' mr='auto'
				textAlign='center'
				p={5}
                borderRadius={10}
                shadow= { '2px 2px 6px #fd6a6a' }
			>
				<Flex mb={2}>
					<Button 
                        border={2} 
                        borderColor='black'
                        borderStyle='solid'
                        mt={{base:'1', md:'2'}} mr={-7}
                        size='sm'
                        onClick={props.function}
                    >x</Button> 
                    <Spacer />
					<Text textAlign='center' alignSelf='center' fontSize='3xl' color='#fd6a6a'>{props.title}</Text>
                    <Spacer />
                </Flex>
                <hr color="black" />
                {/* <Divider size='20px' color='black' orientation="horizontal" /> */}
				<Box justifyContent='center' mt={3}>
					{props.content}
				</Box>
			</Box>
		</Flex>
    );
}

export default PopTemplate;