import React from "react";
import { Box, Text } from "@chakra-ui/react";
interface Props {
  title: string;
}
function Header(props: Props) {
  return (
    <Box
      display="flex"
      pl="8"
      alignItems="center"
      minH="72px"
      w="full"
      bg="#1e1f21"
      border="1px solid"
      borderBottomColor="gray.200"
    >
      <Text fontSize="xl" color="white" fontWeight="bold">
        {props.title}
      </Text>
    </Box>
  );
}

export default Header;
