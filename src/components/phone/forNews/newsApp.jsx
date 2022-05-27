import React from "react";
import { Box, Text } from '@chakra-ui/react'
import { NewsContextProvider } from "./newsContext";
import News from "./news";

// tutorial switch content
// https://medium.com/nerd-for-tech/a-case-to-switch-using-switch-statements-in-react-e83e01154f60

function newsApp () {
	return (
		<NewsContextProvider>
			<Box bgColor={'red.500'} padding='2'>
				<Text textAlign="center"  fontSize={'50px'} color={'white'}>Latest News</Text>
				<News /> 
			</Box>
		</NewsContextProvider>
	)
}

export default newsApp;