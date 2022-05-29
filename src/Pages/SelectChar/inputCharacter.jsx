import React, { useContext } from 'react';
import { VStack, Input, Select } from '@chakra-ui/react';
import { AllContext } from '../../components/Value/CoinContext';

function InputDataChar() {
	const { setNama, setJurusan } = useContext(AllContext);
	
	function handleNama (e) {
		setNama(e.target.value);
	};
	
	function handleJurusan(e) {
		setJurusan(e.target.value);
	}

	return (
		<VStack spacing={5} mt={8}>
			<Input
				autoFocus
				bgColor="White"
				width="200%"
				maxW="350px"
				color="Black"
				variant="outline"
				placeholder="Masukan Nama"
				filter="drop-shadow(3px 3px 2px #222)"
				onChange={handleNama}
			/>
			<Select
				id=""
				autoFocus
				bgColor="White"
				width="200%"
				maxW="350px"
				color="Black"
				variant="outline"
				placeholder="Masukan jurusan"
				filter="drop-shadow(3px 3px 2px #222)"
				cursor="pointer"
				onChange={(handleJurusan)}
			>
				<option value="Informatika">Informatika</option>
				<option value="Ilmu Komunikasi">Ilmu Komunikasi</option>
				<option value="DKV">DKV</option>
				<option value="Film">Film</option>
			</Select>
		</VStack>
	)
}

export default InputDataChar