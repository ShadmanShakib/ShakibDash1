import React from "react";
import { Box } from "@chakra-ui/react";
import { Topbar } from "../common/Topbar";
import { Greeting, AchievementWidget, BaseCard, PeopleWidget } from "./index";
import ProjectWidget from "./ProjectWidget";

function Home() {
  return (
    <Box
      bgSize="cover"
      backgroundImage="url(https://d3ki9tyy5l5ruj.cloudfront.net/obj/b18a6d6d4b5938c3625dc87034a6effc2ca2de55/Forest_background_dark.png)"
      display="flex"
      flexGrow={1}
      flexShrink={1}
      justifyContent="center"
      position="relative"
      flexBasis="0%"
      flexDirection="column"
      minW="920px"
    >
      <Box position="relative" w="100%">
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
            pt="72px"
          >
            <Greeting />
            <AchievementWidget />
            <BaseCard />
            <ProjectWidget />
            <PeopleWidget />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
