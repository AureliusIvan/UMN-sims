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
  SliderMark,
} from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { AllContext } from '../../components/Value/CoinContext';

function Sleep() {
  const { hour, setHour } = useContext(AllContext);
  const { tidur, setTidur } = useContext(AllContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bar, setBar] = useState(6);
  function sleep() {
    const time = bar * 10;
    setTidur(tidur + time);
    onClose();
    setHour(hour + bar);
  }
  return (
    <>
      <Button
        onClick={onOpen}
        position="absolute"
        right="50px"
        transform="translateY(30px)"
        colorScheme="pink"
        color="black"
        filter="contrast(200%) drop-shadow(5px 5px white)"
      >
        Sleep
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sleep Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Sleep for: </Text>
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={sleep} variant="ghost">
              Sleep
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Sleep;
