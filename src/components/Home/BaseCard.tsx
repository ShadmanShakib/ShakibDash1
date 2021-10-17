import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import TabNavItem from "./TabNavItem";
import MyTaskInput from "./MyTaskInput";
export default function BaseCard() {
  return (
    <Box
      mb="16px"
      h="400px"
      bg="White"
      borderRadius="8px"
      position="relative"
      border="1px solid #edeae9"
    >
      {/* My task widget */}
      <Box display="flex" flexDirection="column" h="100%">
        {/* MyTaskWidget-Header */}
        <Box border="1px solid" borderColor="#edeae9" px="24px" display="flex">
          <Box
            boxSizing="border-box"
            borderRadius="50%"
            border="1px dashed"
            mt="16px"
            h="48px"
            w="48px"
            backgroundImage="url(https://d3ki9tyy5l5ruj.cloudfront.net/obj/3d4665c7cf119dc9dc38232301b18fa68b9bb17c/avatar.svg)"
          ></Box>
          {/* MyTaskWidge--title and Tab */}
          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            justifyContent="space-between"
            pt="24px"
            pl="16px"
          >
            <Box display="flex" pb="4px" alignItems="center">
              <Text fontSize="20px" lineHeight="28px" pr="8px">
                My&nbsp;Priorities
              </Text>
              <svg
                height="16px"
                width="16px"
                focusable="false"
                viewBox="0 0 32 32"
                fill="#6d6e6f"
              >
                <path d="M26,14h-2v-4c0-4.4-3.6-8-8-8s-8,3.6-8,8v4H6c-2.2,0-4,1.8-4,4v8c0,2.2,1.8,4,4,4h20c2.2,0,4-1.8,4-4v-8C30,15.8,28.2,14,26,14z M10,10c0-3.3,2.7-6,6-6s6,2.7,6,6v4H10V10z"></path>
              </svg>
            </Box>
            {/* TabNavigationbar */}
            <HStack>
              <TabNavItem title="Upcoming" selected={true} />
              <TabNavItem title="Overdue" selected={false} />
              <TabNavItem title="Completed" selected={false} />
            </HStack>
          </Box>
        </Box>
        {/* Mytask input */}
        <MyTaskInput />
      </Box>
    </Box>
  );
}
