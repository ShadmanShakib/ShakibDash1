import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Plus } from "../../icons";
function AddTask() {
  return (
    <Box
      role="button"
      w="full"
      h="36px"
      px="12px"
      alignItems="center"
      borderRadius="6px"
      display="flex"
      justifyContent="center"
    >
      <Plus />

      <Text ml="3" color="brand.weak">
        Add Task
      </Text>
    </Box>
  );
}

export default AddTask;
