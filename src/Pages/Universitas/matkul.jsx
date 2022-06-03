import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Stack,
    Flex,
    Image,
    Box,
    Tooltip
} from '@chakra-ui/react'
import { AllContext } from '../../components/Value/CoinContext';
import { StatFunction } from '../../components/templateAndFunction/statCoinFunction';
import React, { useContext, useState, useEffect} from 'react';
import gif1 from './bg/Mukbangstudy.gif';
import gif2 from './bg/gamerstudyinclass.gif';
import gif3 from './bg/holkaystudy.gif';
import gif4 from '../../components/asset/gif/coding/studyinclass.gif';
import shown from '../../components/asset/uni/study.png';

function Contoh(props){
    const {
        tidur,
        setTidur,
        makan,
        setMakan,
        belajar,
        setBelajar,
        character,
        setCharacter,
    } = useContext(AllContext);
    const [gif, setGif] = useState(gif1);

    const PopUp = () => (
        <ModalOverlay
            bg="rgba(0,0,0, 0.6)"
            backdropFilter="blur(5px) hue-rotate(90deg)"
        />
    );
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<PopUp />);
    
    useEffect(() => {
        console.log(character);
        if (character === 1) {
            setGif(gif1);
        } else if (character === 2) {
            setGif(gif2);
        } else if (character === 3) {
            setGif(gif3);
        } else if (character === 4) {
            setGif(gif4);
        }
    }, []);

    
    return (
        <>
                <Button size='md' height='48px' width='200px' border='2px' borderColor='blue.100'
                minWidth='200' onClick={()=>{
                    setOverlay(<PopUp />);
                    onOpen();
                    setTimeout(() => {
                        onClose();
                    }, 1800);
                    
                    if (character === 4) {
                        StatFunction(belajar, setBelajar, 12, 0);
                    } else {
                        StatFunction(belajar, setBelajar, 10, 0);
                    }
                    StatFunction(tidur, setTidur, 0, 5);
                    StatFunction(makan, setMakan, 0, 8);
                }}>
                    {props.matkul}
                </Button>
    
        <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent bg="rgba(0,0,0,0)" boxShadow="none" pb={3}>
            <ModalBody textAlign="center">
                <Flex flexDir="column" alignItems="center" justifyContent="center">
                {props.comment}
                <Image
                    src={gif}
                    width={{ md: '100%', base: '70%' }}
                    filter="drop-shadow(2px 2px 5px black)"
                  />
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      );
}

function Matkul() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {jurusan, setJurusan} = useContext(AllContext);
    const [matkul1, setmatkul1] = useState('Ivan');
    const [matkul2, setmatkul2] = useState('Maecyntha');
    const [matkul3, setmatkul3] = useState('Patricia');
    const [matkul4, setmatkul4] = useState('Arka');
    const [pilmatkul, pilmatkul1] = useState('matakuliah');
    const { ngitungmatkul1, setngitungmatkul1} = useContext(AllContext);
    const { ngitungmatkul2, setngitungmatkul2} = useContext(AllContext);
    const { ngitungmatkul3, setngitungmatkul3} = useContext(AllContext);
    const { ngitungmatkul4, setngitungmatkul4} = useContext(AllContext);

    useEffect(()=>{
        if (jurusan === "Informatika"){
            pilmatkul1('Pilih Mata Kuliah (Informatika)');
            setmatkul1('Intro to Internet Technology');
            setmatkul2('Calculus');
            setmatkul3('English');
            setmatkul4('Algorithms and Data Structure');
        }
        else if (jurusan === "Ilmu Komunikasi"){
            pilmatkul1('Pilih Mata Kuliah (Ilmu Komunikasi)');
            setmatkul1('Photographic');
            setmatkul2('Basic Speaking');
            setmatkul3('English');
            setmatkul4('Communication');
        }
        else if (jurusan === "DKV"){
            pilmatkul1('Pilih Mata Kuliah (DKV)');
            setmatkul1('Basic Drawing');
            setmatkul2('Design Graphics');
            setmatkul3('English');
            setmatkul4('Basic Colour');
        }
        else if (jurusan === "Film"){
            pilmatkul1('Pilih Mata Kuliah (Film)');
            setmatkul1('Basic Editing');
            setmatkul2('Camera Fundamental');
            setmatkul3('English');
            setmatkul4('Basic Colour Grading');
        }
    },[])
    
    return (
    <>
        <Tooltip label="study" placement="right">
            <Image 
                src={shown}
                onClick={onOpen} 
                width={{ base: 120, sm: 140, md: 165 }}
                cursor="pointer"
                transition="0.3s"
                _hover={{ transform: 'scale(1.1)' }}
            />
        </Tooltip>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
                {pilmatkul}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>

            <Stack direction='column' spacing={3} align='center'>
                <Box onClick={() => {setngitungmatkul1(setngitungmatkul1 + 1)}}>
                    <Contoh matkul={matkul1} />
                </Box>

                {/* <Button colorScheme='blue' variant='outline' onClick={()=>{
                    onClose();
                    setngitungmatkul1(ngitungmatkul1+1);
                    if (character === 4) {
                        StatFunction(belajar, setBelajar, 12, 0);
                    } else {
                        StatFunction(belajar, setBelajar, 10, 0);
                    }
                    StatFunction(tidur, setTidur, 0, 5);
                    StatFunction(makan, setMakan, 0, 8);
                    
                }}>
                    {matkul1}
                </Button> */}

                <Box onClick={() => {setngitungmatkul2(setngitungmatkul2 + 1)}}>
                    <Contoh matkul={matkul2} />
                </Box>

                <Box onClick={() => {setngitungmatkul3(setngitungmatkul3 + 1)}}>
                    <Contoh matkul={matkul3} />
                </Box>

                <Box onClick={() => {setngitungmatkul4(setngitungmatkul4 + 1)}}>
                    <Contoh matkul={matkul4} />
                </Box>
            </Stack>

            </ModalBody>

            <ModalFooter>
            <Button colorScheme='red' variant='outline' mr={3} onClick={onClose}>
                Close
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
        
    </>
    )
}

export default Matkul;

