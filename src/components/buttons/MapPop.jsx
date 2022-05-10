import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  Flex,
  Image
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

import mapIcon from "../../components/asset/icon/mapIcon.png"
import base from '../asset/map/base.png'
import mall from '../asset/map/mall.png'
import umn from '../asset/map/umn.png'
import cafe from '../asset/map/cafe.png'
import home from '../asset/map/home.png'

function MapPop(props) {
  const PopUp = () => (
    <ModalOverlay
      bg="rgba(0,0,0, 0.6)"
      backdropFilter="blur(5px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<PopUp />);
  
  return (
    <>
      <Image
        src={mapIcon}
        width={{base:"60%", sm:"40%", md:"22%"}}
        cursor="pointer"
        transition="0.2s linear"
        _hover={{	transform:"scale(1.15)" }}
        onClick={() => {
          setOverlay(<PopUp />);
          onOpen();
        }}
      />
      
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bg="rgba(0,0,0,0)" boxShadow="none">
          <ModalCloseButton color='white' zIndex={5}/>
          <Flex alignItems='center' justifyContent='center'>
            <Image
              src={base} 
              alt="my map"
              filter="drop-shadow(2px 2px 3px burlywood)"
            />
            <Places 
              icon = {mall}
              width = {{base: "42%", sm:"40%"}}
              left = {{base:"0", sm:"0"}}
              top = {{base:"-2", sm:"0"}}
              function = {() => console.log("ini mall")}
            />
            <Places
              icon = {umn}
              width = {{base:"45%", sm:"42%"}}
              left = {{base:"210", sm:"250"}}
              top = {{base:"-4", sm:"-2"}}
              function = {() => console.log("ini umn")}
            />
            <Places 
              icon = {cafe}
              width = {{base:"34%", sm:"32%"}}
              left = {{base:"235", sm:"270"}}
              top = {{base:"115", sm:"140"}}
              function = {props.cafe} //belom berfungsi
            />
            <Places
              icon = {home}
              width = {{base:"42%", sm:"40%"}}
              left = {{base:"0", sm:"21"}}
              top = {{base:"110", sm:"130"}}
              function = {props.home}
            />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

function Places (props) {
  return (
    <Image 
      zIndex={2} 
      src={props.icon} 
      width={props.width} 
      position="absolute" 
      left={props.left}
      top={props.top}
      cursor="pointer"
      transition="0.2s linear"
      onClick={props.function}
      _hover={{	filter:"drop-shadow(2px 2px 3px skyblue)", 
                transform:"scale(1.2)"
              }}
    />
  )
}

export default MapPop;

