import React from "react";
import { Box } from "@chakra-ui/react";
interface Props {
  text: string;
  icon: any;
}
function MenuItem(props: Props) {
  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      px="24px"
      h="32px"
      lineHeight="32px"
    >
      <Box mr="8px">{props.icon}</Box>

      <p style={{ color: "#cbd4db", fontWeight: 400, fontSize: 10 }}>
        {props.text}
      </p>
    </Box>
  );
}

export default MenuItem;
