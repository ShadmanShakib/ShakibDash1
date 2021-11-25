import React from "react";
import { Plus, ThreeDot } from "../icons";
import { Box, Text } from "@chakra-ui/react";

interface BoardColumnProps {
  title: string;
}
function BoardColumn(props: BoardColumnProps) {
  const { title } = props;
  return (
    <Box
      borderRadius="6px"
      display="flex"
      flexDirection="column"
      pt="8px"
      w="304px"
      px="12px"
    >
      <Box
        display="flex"
        cursor="grab"
        flexDirection="column"
        flex="0, 0, auto"
      >
        <Box
          cursor="pointer"
          borderRadius="6px"
          display="flex"
          alignItems="center"
          position="relative"
          flexGrow={0}
          flexShrink={0}
          flexBasis="36px"
          justifyContent="space-between"
        >
          <Text color="white" fontWeight="semibold">
            {title}
          </Text>
          <Box display="flex" mx="2">
            <Plus />
            <Box ml="2">
              <ThreeDot height="16px" width="16px" fill="#a2a0a2" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BoardColumn;
