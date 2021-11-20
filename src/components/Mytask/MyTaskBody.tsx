import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ListView } from "../Mytask";
function MyTaskBody() {
  return (
    <Box>
      <Box
        px="24px"
        border="1px solid"
        display="flex"
        alignItems="center"
        h="56px"
        zIndex={600}
        bg="brand.bgWeak"
      >
        <Box
          display="flex"
          borderTopRadius="6px"
          borderBottomRadius="6px"
          px="8px"
          bg="brand.btnBgPrimary"
          h="28px"
          alignItems="center"
        >
          <svg fill="white" height="12" width="12" viewBox="0 0 24 24">
            <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path>
          </svg>
          <Text color="white">Add Task</Text>
        </Box>
      </Box>
      <ListView />
    </Box>
  );
}

export default MyTaskBody;
