import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  text: string;
  icon: any;
  isSelected?: boolean;
}
function MenuItem(props: Props) {
  return (
    <Box
      aria-selected={props.isSelected}
      _selected={{ bgColor: "rgba(255,255,255,.2)" }}
      cursor="pointer"
      display="flex"
      alignItems="center"
      px="24px"
      h="32px"
      lineHeight="32px"
      _hover={{ bgColor: "rgba(255,255,255,.2)" }}
    >
      <Box mr="8px">{props.icon}</Box>

      <p style={{ color: "#cbd4db", fontWeight: 400, fontSize: 14 }}>
        {props.text}
      </p>
    </Box>
  );
}

export default MenuItem;
