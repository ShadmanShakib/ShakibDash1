import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common";
import { MainPage } from "../../components/Home";

function Dashboard() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box w="100%">
        <MainPage />
      </Box>
    </Box>
  );
}

export default Dashboard;
