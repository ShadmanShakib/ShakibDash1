import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common";
import { CurrencyDetails } from "../../components/Reporting";

function Reporting() {
  return (
    <Box display="flex" minH="100vh">
      <Sidebar />
      <CurrencyDetails />
    </Box>
  );
}

export default Reporting;
