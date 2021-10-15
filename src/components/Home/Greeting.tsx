import React from "react";
import { Text } from "@chakra-ui/react";
function Greeting() {
  return (
    <>
      <Text
        textAlign="center"
        lineHeight="20px"
        fontWeight="500"
        mb="4px"
        transitionProperty="color"
        transitionDuration="200ms"
        transitionTimingFunction="ease-in-out"
        color="white"
        fontSize="16px"
      >
        Friday, October&nbsp;15
      </Text>
      <Text
        fontSize="32px"
        transitionproperty="color"
        transition-duration="200ms"
        transition-timing-function="ease-in-out"
        lineHeight="40px"
        color="white"
        textAlign="center"
        fontWeight="400"
      >
        Good evening,&nbsp;Shadman
      </Text>
    </>
  );
}

export default Greeting;
