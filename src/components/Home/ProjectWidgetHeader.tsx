import { Box, Text } from "@chakra-ui/react";
import React from "react";

function ProjectWidgetHeader() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="24px"
      pt="24px"
      h="28px"
    >
      <Box display="flex" alignItems="baseline">
        <Text fontSize="20px" lineHeight="28px" pr="8px" fontWeight="500">
          Projects
        </Text>
        <Box
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          boxSizing="border-box"
          borderRadius="6px"
          px="8px"
          flexShrink={1}
          role="button"
          aria-expanded="false"
          tabindex={0}
        >
          <Text
            fontSize="12px"
            lineHeight="28px"
            cursor="pointer"
            fontWeight="500"
            color="#6d6e6f"
          >
            Recently visited
          </Text>
          <svg
            style={{ marginLeft: "4px" }}
            fill="#6d6e6f"
            height="12px"
            width="12px"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectWidgetHeader;
