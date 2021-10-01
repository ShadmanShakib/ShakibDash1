import React from "react";
import { Box } from "@chakra-ui/react";
interface INuxButton {
  onClick?: () => void;
}
function NuxButton(props: INuxButton) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      role="button"
      fontSize="14px"
      height="36px"
      lineHeight="36px"
      px="12px"
      bg="#796EFF"
      tabIndex={0}
      cursor="pointer"
      alignSelf="stretch"
      alignItems="center"
      border="1px solid"
      borderRadius="6px"
      justifyContent="center"
      transition="all"
      transitionDuration=".2s"
      display="inline-flex"
      color="white"
      _hover={{ bg: "#635ac7" }}
    >
      Log in
    </Box>
  );
}

export default NuxButton;
