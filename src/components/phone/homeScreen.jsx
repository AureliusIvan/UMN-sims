import { Box, Text, Divider, Flex, Image, Button } from "@chakra-ui/react";
import { useState } from "react";

import Clock from "../Clock";
import homeButton from '../asset/icon/homePhone.png'

// list aplikasi
import NewsApp from "./forNews/newsApp";
import App2 from "./forApp2/app2";
import Home from "../../Pages/Home/Home";

function HomeScreen() {
	return (
		<Box>
			<Text size="xs">
				<Clock />
			</Text>
			<Divider borderColor='black' />
			<AppLinking />
		</Box>
	)
}

// UPDATE LIST APP DARI SINI (2) --------------------------

const AppLinking = () => {
	const [app, setApp] = useState('start');

	const handleClick = (appState) => {
		setApp(appState)
	}

	switch (app) {
		case 'start':
			return (
				<Box>
					<AppList handleClick={handleClick}/>
					<HomeButton handleClick={handleClick}/>
				</Box>
			)
		case 'news':
			return (
				<Box>
					<NewsApp handleClick={handleClick}/>
					<HomeButton handleClick={handleClick}/>
				</Box>
			)
		case 'clock':
			return (
				<Box>
					<App2 handleClick={handleClick}/>
					<HomeButton handleClick={handleClick}/>
				</Box>
			)
		default: 
			return null
	}
}

// uda coba pake function w/ props tapi ga masuk ke AppListnya
function AppList(props) {
	return (
		<Box>
			<Flex mt={3} justifyContent='space-around' color='black'>
				<Button 
                    fontWeight='light' 
                    colorScheme='teal'
                    onClick={() => props.handleClick('news')} 
                >News</Button>

				<Button 
                    fontWeight='light' 
                    colorScheme='teal'
                    onClick={() => props.handleClick('clock')}
                >Clock</Button>
			</Flex>
		</Box>
	)
}

// --------------------------------------------------------

function HomeButton(props) {
	return (
		<Flex justifyContent='center'>
			<Image
				src={homeButton}
				width='10%'
				position='fixed' 
				bottom={0} 
				size='30px' 
				cursor='pointer'
				transition="0.2s"
				_hover={{transform:"scale(1.2)"}}
				onClick={() => props.handleClick('start')}
			/>
		</Flex>
	)
}

export default HomeScreen;