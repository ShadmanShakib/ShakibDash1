import React from "react";
import { Box } from "@chakra-ui/react";
import { Topbar } from "../common/Topbar";
import { Greeting, AchievementWidget, BaseCard } from "./index";
function Home() {
  return (
    <Box
      bgSize="cover"
      backgroundImage="url(https://d3ki9tyy5l5ruj.cloudfront.net/obj/855322c87bfcb2eab595159675ffa2d5d46b67e0/forest_home_background.png)"
      display="flex"
      flexGrow={1}
      flexShrink={1}
      justifyContent="center"
      position="relative"
    >
      <Box w="100%" overflowY="auto">
        <Topbar />
        <Box
          display="flex"
          flexDirection="column"
          w="100%"
          paddingX="32px"
          alignItems="center"
        >
          {/* Homepage content */}
          <Box
            display="flex"
            flexDirection="column"
            w="100%"
            overflow="hidden"
            maxW="1200px"
            alignItems="stretch"
          >
            <Greeting />
            <AchievementWidget />
            <BaseCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
