import React from "react";
import { Box, VStack } from "@chakra-ui/react";
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
              height="220px"
              bg="white"
              border="1px solid"
              borderRadius="8px"
              display="block"
              borderColor="#edeae9"
            >
              <Box
                alignItems="center"
                boxSizing="border-box"
                py="48px"
                px="16px"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <VStack maxW="100%" alignItems="center">
                  <img
                    className="MiniIllustration MiniIllustration--hugeAvatar"
                    alt=""
                    src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/fa519ac9192b359a39a682eedc6a05fc0a9c7695/Blue hair woman avatar.svg"
                  />
                  <Box className="PeopleWidgetCardStructure-textContainer">
                    <h6 className="PeopleWidgetInviteCard-text Typography Typography--colorDarkGray3 Typography--h6 Typography--fontWeightMedium Typography--textAlignCenter">
                      See updates from your team. Keep work on&nbsp;track.
                    </h6>
                  </Box>
                </VStack>
                <Box role="button" tabIndex={0}>
                  Send invites
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PeopleWidget;
