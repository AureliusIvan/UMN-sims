import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Flex,
  Image,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import mapIcon from '../../components/asset/icon/mapIcon.png';
import base from '../asset/map/base.png';
import mall from '../asset/map/mall.png';
import umn from '../asset/map/umn.png';
import cafe from '../asset/map/cafe.png';
import home from '../asset/map/home.png';
import { AllContext } from '../Value/CoinContext';

function MapPop(props) {
  const PopUp = () => (
    <ModalOverlay
      bg="rgba(0,0,0, 0.6)"
      backdropFilter="blur(5px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<PopUp />);
  const { hour, setHour } = useContext(AllContext);
  return (
    <>
      <Tooltip label="map">
        <Image
          position="absolute"
          src={mapIcon}
          top="125"
          ml={2}
          width={{ base: '85px', sm: '90px', md: '95px' }}
          filter="drop-shadow(10px 5px 2px white)"
          cursor="pointer"
          transition="0.2s linear"
          _hover={{ transform: 'scale(1.15)' }}
          onClick={() => {
            setOverlay(<PopUp />);
            onOpen();
          }}
        />
      </Tooltip>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bg="rgba(0,0,0,0)" boxShadow="none">
          <ModalCloseButton color="white" zIndex={5} />
          <Flex alignItems="center" justifyContent="center">
            <Image
              src={base}
              alt="my map"
              filter="drop-shadow(2px 2px 3px burlywood)"
            />
            <Places
              name="Mall
                    open on 7AM until 11PM"
              icon={mall}
              width={{ base: '42%', sm: '40%' }}
              left={{ base: '0', sm: '0' }}
              top={{ base: '-24', sm: '-20' }}
              function={props.mall}
              disabled={hour > 23 || hour < 7 ? true : false}
            />
            <Places
              name="University 
                    open on 8AM until 17PM"
              placement="top"
              icon={umn}
              width={{ base: '45%', sm: '42%' }}
              left={{ base: '260', sm: '250' }}
              top={{ base: '-70', sm: '-35' }}
              function={props.uni}
              disabled={hour > 17 || hour < 8 ? true : false}
            />
            <Places
              name="Cafe
                    open on 7AM until 11PM"
              icon={cafe}
              width={{ base: '34%', sm: '32%' }}
              left={{ base: '275', sm: '270' }}
              top={{ base: '115', sm: '120' }}
              function={props.cafe} 
              disabled={hour > 23 || hour < 7 ? true : false}
            />
            <Places
              name="Home"
              icon={home}
              width={{ base: '42%', sm: '40%' }}
              left={{ base: '0', sm: '21' }}
              top={{ base: '70', sm: '70' }}
              function={props.home}
            />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

// function Places(props) {
//   return (
//     <Tooltip label={props.name} hasArrow placement="auto" closeDelay={100}>
//       <Image
//         zIndex={2}
//         src={props.icon}
//         width={props.width}
//         position="absolute"
//         left={props.left}
//         top={props.top}
//         cursor="pointer"
//         transition="0.2s linear"
//         onClick={props.function}
//         _hover={{
//           filter: 'drop-shadow(2px 2px 3px skyblue)',
//           transform: 'scale(1.2)',
//         }}
//       />
//     </Tooltip>
//   );
// }

function Places(props) {
  return (
    <Tooltip
      shouldWrapChildren
      label={props.name}
      hasArrow
      placement={props.placement}
      closeDelay={100}
    >
      <Button
        variant={'unstyled'}
        width={props.width}
        height={props.width}
        pos="absolute"
        left={props.left}
        top={props.top}
        disabled={props.disabled}
        onClick={props.function}
      >
        <Image
          src={props.icon}
          zIndex={2}
          width={'100%'}
          position="absolute"
          cursor="pointer"
          transition="0.2s linear"
          _hover={{
            filter: 'drop-shadow(2px 2px 3px skyblue)',
            transform: 'scale(1.2)',
          }}
        />
      </Button>
    </Tooltip>
  );
}

export default MapPop;
