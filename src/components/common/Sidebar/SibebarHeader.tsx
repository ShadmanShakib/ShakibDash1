import { Box, Image } from "@chakra-ui/react";
import React from "react";
interface Props {
  onClick?: () => void;
}
function SibebarHeader(props: Props) {
  return (
    <Box
      display="flex"
      h="72px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image
        ml="26px"
        alt="logo"
        h="16px"
        w="80px"
        src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6622ad572b5223bcb1ad696eae8f988e5dd04631/Asana-Logo-Horizontal-Coral-White.svg"
      />

      <Box
        onClick={props.onClick}
        cursor="pointer"
        mr="16px"
        px="8px"
        role="button"
      >
        <svg fill="#cbd4db" height="16" width="25px" viewBox="0 0 50 32">
          <path d="M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z"></path>
          <path d="M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z"></path>
          <path d="M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z"></path>
          <path d="M8.1,22.8c-0.3,0-0.5-0.1-0.7-0.3L0.7,15l6.7-7.8c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4L3.3,15l5.5,6.2   c0.4,0.4,0.3,1-0.1,1.4C8.6,22.7,8.4,22.8,8.1,22.8z"></path>
        </svg>
      </Box>
    </Box>
  );
}

export default SibebarHeader;
