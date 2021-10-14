import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar, Topbar } from "../../components/common";

function Dashboard() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box w="100%">
        <Topbar />
      </Box>
    </Box>
  );
}

export default Dashboard;
