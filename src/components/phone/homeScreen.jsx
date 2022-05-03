import { Box, Text, Divider, Flex, Image, Button } from "@chakra-ui/react";
import { useState } from "react";

import Counter from "../Clock";
import homeButton from '../asset/icon/homePhone.png'

// list aplikasi
import NewsApp from "./forNews/newsApp";
import App2 from "./forApp2/app2";

function HomeScreen() {
	const [app, setApp] = useState('start');

	const handleClick = (appState) => {
		setApp(appState)
	}

	return (
		<Box>
			<Text size="xs">
				<Counter/>
			</Text>
			<Divider borderColor='black' />
			
			{(() => {
				switch (app) {
					case 'start':
						return (
							<Box>
								<AppList handleClick={handleClick}/>
								<HomeButton handleClick={handleClick}/>
							</Box>
						)
					case 'app1':
						return (
							<Box>
								<NewsApp handleClick={handleClick}/>
								<HomeButton handleClick={handleClick}/>
							</Box>
						)
					case 'app2':
						return (
							<Box>
								<App2 handleClick={handleClick}/>
								<HomeButton handleClick={handleClick}/>
							</Box>
						)
					default: 
						return null
				}
			})()}
		</Box>
	)
}

// uda coba pake function w/ props tapi ga masuk ke AppListnya
function AppList(props) {
	return (
		<Box>
			<Flex mt={3} justifyContent='space-around' color='black'>
				<Button 
                    fontWeight='light' 
                    colorScheme='teal'
                    onClick={() => props.handleClick('app1')} 
                >News</Button>

				<Button 
                    fontWeight='light' 
                    colorScheme='teal'
                    onClick={() => props.handleClick('app2')}
                >App 2</Button>
			</Flex>
		</Box>
	)
}

function HomeButton(props) {
	return (
		<Flex justifyContent='center'>
			<Image
				src={homeButton}
				width='10%'
				position='fixed' 
				bottom={5} 
				size='30px' 
				cursor='pointer'
				_hover={{boxShadow : 'xl'}}
				onClick={() => props.handleClick('start')}
			/>
		</Flex>
	)
}

export default HomeScreen;