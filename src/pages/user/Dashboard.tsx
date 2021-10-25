import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common";
import { MainPage } from "../../components/Home";

function Dashboard() {
  return (
    // full page
    <Box
      position="absolute"
      top="0"
      right="0"
      left="0"
      bottom="0"
      display="flex"
      flexDirection="column"
    >
      {/* mainpage */}
      <Box display="flex" flexGrow={1} flexShrink={1} flexBasis="auto">
        {/* main_page */}
        <Box
          display="flex"
          flexBasis={0}
          minH="1px"
          flexGrow={1}
          flexShrink={1}
          overflow="hidden"
          position="relative"
        >
          <Sidebar />
          <Box overflowY="scroll" w="100%" maxH="100vh">
            <MainPage />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
