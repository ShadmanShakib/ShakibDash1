import React from "react";
import { Box, Image, HStack, Center } from "@chakra-ui/react";
import PeopleWidgetHeader from "./PeopleWidgetHeader";
function PeopleWidget() {
  return (
    <Box
      bg="white"
      h="400px"
      position="relative"
      borderRadius="8px"
      pt="24px"
      px="24px"
      pb="32px"
      mb="16px"
      display="block"
    >
      {/* PeopleWidgetHeader */}
      <PeopleWidgetHeader />
      {/* Peoplewidgetcarosal start */}
      <Box mt="32px" display="block">
        <Box overflowX="hidden">
          <Box display="flex" px="24px" width="fit-content">
            {/* PeopleCard */}
            <Box
              width="220px"
              height="280px"
              bg="white"
              border="1px solid"
              borderRadius="8px"
              display="block"
              borderColor="#edeae9"
            >
              <Box
                py="48px"
                px="16px"
                alignItems="center"
                boxSizing="border-box"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  maxW="100%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Image
                    h="64px"
                    w="64px"
                    alt=""
                    src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/fa519ac9192b359a39a682eedc6a05fc0a9c7695/Blue hair woman avatar.svg"
                  />
                  <HStack alignItems="center" mt="16px" flexDirection="column">
                    <Box
                      fontSize="14px"
                      textAlign="center"
                      className="PeopleWidgetInviteCard-text Typography Typography--colorDarkGray3 Typography--Box Typography--fontWeightMedium Typography--textAlignCenter"
                    >
                      See updates from your team. Keep work on&nbsp;track.
                    </Box>
                  </HStack>
                </Box>
                <Center
                  role="button"
                  px="8px"
                  height="28px"
                  fontSize="12px"
                  borderRadius="6px"
                  boxSizing="border-box"
                  tabIndex={0}
                  border="1px solid"
                  borderColor="#cfcbcb"
                  lineHeight="28px"
                >
                  Send invites
                </Center>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PeopleWidget;
