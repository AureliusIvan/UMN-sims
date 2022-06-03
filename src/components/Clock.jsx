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
  const [hari, setHari] = useState("");

  useEffect(() => {
    if (Day%7 === 0) {
      setHari("Sunday")
    } 
    else if (Day%7 === 1) {
      setHari("Monday")
    } 
    else if (Day%7 === 2) {
      setHari("Tuesday")
    } 
    else if (Day%7 === 3) {
      setHari("Wednesday")
    }
    else if (Day%7 === 4) {
      setHari("Thursday")
    }
    else if (Day%7 === 5) {
      setHari("Friday")
    }
    else if (Day%7 === 6) {
      setHari("Saturday")
    }
  }, []);

  return (
    <Flex px={3} py={1} justifyContent="space-between">
      <Text>{hari}</Text>
      <Flex justifyContent="space-evenly" alignItems="center" width="40%">
        <FaWifi />
        <FaBatteryHalf />
        <Text>{formatTime(hour)}:{formatTime(minute)}</Text>
      </Flex>
    </Flex>
  );
}

export default Clock;