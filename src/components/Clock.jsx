import React, { useState, useEffect, useRef, useContext } from "react";
import { AllContext } from "./Value/CoinContext";
import { Text, Flex } from "@chakra-ui/react";
import { FaWifi, FaBatteryHalf } from "react-icons/fa"

function Clock() {
  const {Day, setDay} = useContext(AllContext);
  const {hour, setHour} = useContext(AllContext);
  const {minute, setCount} = useContext(AllContext);
 
  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  }
  return (
    <Flex justifyContent="space-between">
      <Text>Day {Day}</Text>
      <Flex justifyContent="space-evenly" alignItems="center" width="40%">
        <FaWifi />
        <FaBatteryHalf />
        <Text>{formatTime(hour)}:{formatTime(minute)}</Text>
      </Flex>
    </Flex>
  );
}

export default Clock;