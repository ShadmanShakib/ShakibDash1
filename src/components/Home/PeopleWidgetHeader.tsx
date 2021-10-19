import { HStack, Box, Text } from "@chakra-ui/layout";
import React from "react";

function PeopleWidgetHeader() {
  return (
    <HStack height="28px" justifyContent="space-between" alignItems="center">
      <HStack alignItems="baseline">
        <Text fontSize="20px" pr="8px" fontWeight="500">
          People
        </Text>
        <Box
          role="button"
          alignItems="center"
          cursor="pointer"
          display="flex"
          aria-expanded="false"
        >
          <Text fontWeight="500" color="#6d6e6f" marginRight="4px">
            Frequent collaborators
          </Text>
          <svg
            fontWeight="500"
            fill="#6d6e6f"
            height="12px"
            width="12px"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
          </svg>
        </Box>
      </HStack>
    </HStack>
  );
}

export default PeopleWidgetHeader;
