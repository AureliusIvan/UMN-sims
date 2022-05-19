import { Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { FaWifi, FaBatteryHalf } from "react-icons/fa";

// MINOR ERROR
// pas jadi 00:00, malah jadi 0:0 terus 00:01

function Counter() {
  const [Day, setDay] = useState(1);
  const [hour, setHour] = useState(23);
  const [minute, setMinute] = useState(0); // 卡咯买地敢提骄傲地59， 敢提useS塔特杨把握好距噶

  const [frontM, setFrontM] = useState("0") // ini ganti jadi ""
  const [frontH, setFrontH] = useState("")

  function formatTime (val) {
    if (val < 10) {
      return "0";
    }
    else {
      return "";
    }
  }

  useInterval(() => {
    setFrontM(formatTime(minute+1))
    setFrontH(formatTime(hour+1))

    setMinute((minute+1));

    if(minute >= 59){
        setHour((hour + 1));
        setMinute(0);
    }
    if(hour >= 23 && minute === 59){
        setDay(Day+1);
        setHour(0);
    }
  }, 1000);

  return (
    <Flex justifyContent="space-between">
      <Text>Day {Day}</Text>
      <Flex justifyContent="space-evenly" alignItems="center" width="40%">
        <FaWifi />
        <FaBatteryHalf />
        <Text>{frontH}{hour}:{frontM}{minute}</Text>
      </Flex>
    </Flex>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Counter;