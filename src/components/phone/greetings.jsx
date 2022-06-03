import { useContext, useEffect, useState } from "react";
import { AllContext } from "../Value/CoinContext";
import { Text, Flex } from "@chakra-ui/react"

function Greetings () {
	const { hour, nama } = useContext(AllContext)
	const [greet, setGreet] = useState("Welcome!")

	useEffect(() => {
		if (hour >= 7 && hour < 12) 
			setGreet("Good Morning!")
		else if (hour >= 12 && hour < 15) 
			setGreet("Good Afternoon!")
		else if (hour >= 15 && hour < 17) 
			setGreet("Good Evening!")
		else if (hour >= 18 || hour < 7) 
			setGreet("Good Night!")
	}, [hour])

	return (
		<Flex justifyContent="center">
			<Text bgColor="teal.200" py={1} px={5} borderRadius={10} border="2px solid white">{`Hi ${nama}, ${greet}`}</Text>
		</Flex>
	)
}

export default Greetings