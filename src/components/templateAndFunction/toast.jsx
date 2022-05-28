import { useState, useEffect, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { AllContext } from "../Value/CoinContext";

function Toast () {
	const {coin, prevCoin} = useContext(AllContext)
	const [first, setFirst] = useState(true);
	
	const toast = useToast();
	useEffect(() => {
		if (first) 
			setFirst(false);
		
		if (!first) {
			if (coin > prevCoin.current)
				toast({
					description: 'koin nambah',
					status: 'success',
					position: 'bottom-start',
					isClosable: true,
				});
			else {
				toast({
					description: 'koin berkurang',
					status: 'warning',
					position: 'bottom-start',
					isClosable: true,
				});
			}
		}
	}, [coin]);
}

export default Toast