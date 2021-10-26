import React from "react";
import { Box } from "@chakra-ui/react";

function Topbar() {
  return (
    <Box
      minH="72px"
      px="24px"
      position="relative"
      display="flex"
      alignItems="center"
      boxSizing="border-box"
      flexShrink={0}
      zIndex={200}
    >
      <Box display="inline-flex">
        <Box display="flex" minH="72px" maxW="100%" alignItems="center">
          <h1>My&nbsp;Tasks</h1>
          <Box
            role="button"
            aria-label="Show options"
            aria-expanded="false"
            tabIndex={0}
          >
            <svg
              height="16px"
              width="16px"
              focusable="false"
              viewBox="0 0 32 32"
            >
              <path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1s1.5-0.7,2.1-0.2l10,8.2l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z"></path>
            </svg>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Topbar;
