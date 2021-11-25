import React from "react";
import { Box } from "@chakra-ui/react";

function TableRow() {
  return (
    <Box
      cursor="pointer"
      pl="24px"
      fontWeight="400"
      lineHeight="16px"
      display="flex"
      borderRadius="4px 4px 0px 0px"
      justifyContent="space-between"
      fontSize="14px"
      flex={1}
      borderBottom="1px solid"
      pr="16px"
      borderColor="white"
      alignItems="center"
    >
      <Box w="160px">Hello</Box>
    </Box>
  );
}

export default TableRow;
