import React from "react";
import { Box } from "@chakra-ui/react";
function AchievementWidget() {
  return (
    <Box
      display="grid"
      mb="12px"
      mt="16px"
      justifyItems="end"
      alignItems="stretch"
      height="48px"
    >
      <Box
        display="block"
        gridColumnStart={1}
        gridRowStart={1}
        justifySelf="center"
      >
        <Box
          h="48px"
          alignItems="center"
          pr="8px"
          borderRadius="60px"
          display="inline-flex"
          bgColor="rgba(255, 255, 255, 0.12)"
        >
          <Box mx="16px">
            <Box
              fontSize="12px"
              height="48px"
              fontWeight="500"
              role="button"
              aria-expanded="false"
              tabIndex={0}
              pr="8px"
              cursor="pointer"
              display="inline-flex"
              alignItems="center"
              transitionDuration=".2s"
              borderRadius="6px"
              justifyContent="center"
            >
              <Box color="white">My week</Box>
              <svg
                height="12px"
                width="12px"
                fill="white"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
              </svg>
            </Box>
          </Box>
          <Box borderRight="1px solid" height="24px"></Box>
          <Box mr="16px">
            <Box display="flex" alignItems="center">
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                w="72px"
              >
                <svg
                  height="16px"
                  width="16px"
                  focusable="false"
                  viewBox="0 0 32 32"
                  fill="white"
                >
                  <path d="M10.9,26.2c-0.5,0-1-0.2-1.4-0.6l-6.9-6.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l5.4,5.4l16-15.9c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L12.3,25.6C11.9,26,11.4,26.2,10.9,26.2z"></path>
                </svg>
                <Box display="block" mx="4px" aria-label="1">
                  <Box aria-hidden="true">
                    <Box h="28px" overflowY="hidden">
                      <Box
                        transform="translateY(-18.181818181818%)"
                        display="inline-block"
                        width="fit-content"
                        transitionProperty="transform"
                        transitionDuration="0.5s"
                        transitionTimingFunction="ease-in-out"
                        transition-delay="0s"
                      >
                        <Box fontSize="20px">&nbsp;</Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          0
                        </Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          1
                        </Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          2
                        </Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          3
                        </Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          4
                        </Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          5
                        </Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          6
                        </Box>
                        <Box
                          fontwidth={500}
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          7
                        </Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          8
                        </Box>
                        <Box
                          fontwidth="500"
                          color="white"
                          fontSize="20px"
                          linehight="28px"
                        >
                          9
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box fontSize="12px" color="white">
                task completed
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="inline-flex"
        border="1px solid"
        borderColor="white"
        height="36px"
        px="12px"
        role="button"
        tabIndex={0}
        alignSelf="end"
        justifySelf="right"
        alignItems="center"
        borderRadius="6px"
        justifyContent="center"
        color="white"
        gridColumnStart={1}
        gridRowStart={1}
        flexShrink={0}
        position="relative"
      >
        <svg
          height="16px"
          width="16px"
          style={{ marginRight: "4px" }}
          fill="white"
          focusable="false"
          viewBox="0 0 32 32"
        >
          <path d="M9.5,2C10.878,2,12,3.122,12,4.5v5c0,1.378-1.122,2.5-2.5,2.5h-5C3.122,12,2,10.878,2,9.5v-5C2,3.122,3.122,2,4.5,2H9.5M9.5,0h-5C2.015,0,0,2.015,0,4.5v5C0,11.985,2.015,14,4.5,14h5c2.485,0,4.5-2.015,4.5-4.5v-5C14,2.015,11.985,0,9.5,0L9.5,0zM27.5,2C28.879,2,30,3.122,30,4.5v5c0,1.378-1.121,2.5-2.5,2.5h-5c-1.379,0-2.5-1.122-2.5-2.5v-5C20,3.122,21.121,2,22.5,2H27.5M27.5,0h-5C20.015,0,18,2.015,18,4.5v5c0,2.485,2.015,4.5,4.5,4.5h5c2.485,0,4.5-2.015,4.5-4.5v-5C32,2.015,29.985,0,27.5,0L27.5,0z M9.5,20c1.378,0,2.5,1.122,2.5,2.5v5c0,1.378-1.122,2.5-2.5,2.5h-5C3.122,30,2,28.878,2,27.5v-5C2,21.122,3.122,20,4.5,20H9.5M9.5,18h-5C2.015,18,0,20.015,0,22.5v5C0,29.985,2.015,32,4.5,32h5c2.485,0,4.5-2.015,4.5-4.5v-5C14,20.015,11.985,18,9.5,18L9.5,18z M24,24v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v5h5c0.55,0,1,0.45,1,1s-0.45,1-1,1h-5v5c0,0.55-0.45,1-1,1s-1-0.45-1-1v-5h-5c-0.55,0-1-0.45-1-1s0.45-1,1-1H24z"></path>
        </svg>
        Customize
      </Box>
    </Box>
  );
}

export default AchievementWidget;
