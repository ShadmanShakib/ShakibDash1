import { Box, Input } from "@chakra-ui/react";
import React from "react";

export default function MyTaskInput() {
  return (
    <Box
      pt="16px"
      px="24px"
      fontSize="20px"
      bgColor="transparent"
      display="flex"
      fontWeight="500"
    >
      <svg
        height="16px"
        width="16px"
        focusable="false"
        viewBox="0 0 32 32"
        style={{ alignSelf: "center", strokeWidth: "2px", marginRight: "8px" }}
        fontSize="20px"
        display="block"
        stroke="#6d6e6f"
        fill="white"
      >
        <path d="M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z"></path>
        <path d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z"></path>
      </svg>
      <Box display="inline-flex" w="100%" position="relative" mr="8px">
        <span className="FunTaskCreator-shadowSpan"></span>
        <Input
          w="100%"
          variant="unstyled"
          fontSize="20px"
          fontWeight="500"
          lineHeight="36px"
          bgColor="transparent"
          placeholder="Don’t forget it. Task it!"
        />
      </Box>
    </Box>
  );
}
