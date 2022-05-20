import React, { useState, useEffect, useRef, useContext } from "react";
import { AllContext } from "./Value/CoinContext";
import { Text } from "@chakra-ui/react";

function Clock() {
  const {Day, setDay} = useContext(AllContext);
  const {hour, setHour} = useContext(AllContext);
  const {minute, setCount} = useContext(AllContext);
 
  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  }
  return (
    <>
    <Text>{formatTime(Day)}:{formatTime(hour)}:{formatTime(minute)}</Text>
    </>
  );
}

export default Clock;