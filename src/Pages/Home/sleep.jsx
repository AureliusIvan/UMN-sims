import {
  Box,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Image,
} from '@chakra-ui/react';
import { useState, useContext, useEffect } from 'react';
import { AllContext } from '../../components/Value/CoinContext';
import { StatFunction, CheckStatFull } from '../../components/templateAndFunction/statCoinFunction';
import shown from './asset/sleep.gif';
//
import GIFsleep1 from '../../components/asset/gif/mukbang/Mukbangsleep.gif';
import GIFsleep2 from '../../components/asset/gif/gamers/Gamersleep.gif';
import GIFsleep3 from '../../components/asset/gif/holkay/Holkaysleep.gif';
import GIFsleep4 from '../../components/asset/gif/coding/Codingsleep.gif';

function Sleep() {
  const { character, setCharacter } = useContext(AllContext);
  const [GIFsleep, setGIFsleep] = useState(GIFsleep1);
  const { hour, setHour } = useContext(AllContext);
  const { tidur, setTidur, countTidur, setCountTidur } = useContext(AllContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bar, setBar] = useState(7);
  
  function sleep() {
    const time = bar * 10;
    StatFunction(tidur, setTidur, time, 0)
    setCountTidur(countTidur + bar)
    console.log("tidur : " + countTidur)
    onClose();
    setHour(hour + bar);
  }

  useEffect(() => {
    if (character === 1) {
      setGIFsleep(GIFsleep1);
    } else if (character === 2) {
      setGIFsleep(GIFsleep2);
    } else if (character === 3) {
      setGIFsleep(GIFsleep3);
    } else if (character === 4) {
      setGIFsleep(GIFsleep4);
    }
  }, []);

  return (
    <>
      <Tooltip label="sleep" placement="start" zIndex={50}>
        <Image
          src={shown}
          width={{ base: 85, sm: 90, md: 125 }}
          height={{ base: 85, sm: 90, md: 125 }}
          filter="drop-shadow(5px 5px white)"
          cursor="pointer"
          transition="0.3s"
          _hover={{ transform: 'scale(1.1)' }}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sleep Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Sleep for: </Text>
            <Image src={GIFsleep} />
            <Slider
              aria-label="slider-ex-4"
              defaultValue={bar}
              min={0}
              max={10}
              step={1}
              onChange={val => {
                setBar(val);
              }}
            >
              <SliderTrack bg="red.100">
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="tomato" />
              </SliderThumb>
            </Slider>
            {bar} Hour
          </ModalBody>

          <ModalFooter>
            <Button
              fontWeight={'thin'}
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              fontWeight={'thin'}
              bgColor="green.400"
              color="white"
              onClick={sleep}
              variant="ghost"
            >
              Sleep
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Sleep;
