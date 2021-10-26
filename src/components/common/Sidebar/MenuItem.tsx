import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface Props {
  text: string;
  icon: any;
  isSelected?: boolean;
  href: string;
}
function MenuItem(props: Props) {
  return (
    <Link to={props.href}>
      <Box
        aria-selected={props.isSelected}
        _selected={{ bgColor: "rgba(255,255,255,.2)" }}
        cursor="pointer"
        display="flex"
        alignItems="center"
        px="24px"
        h="32px"
        lineHeight="32px"
        _hover={{ bgColor: "rgba(255,255,255,.1)" }}
      >
        <Box mr="8px">{props.icon}</Box>

        <p style={{ color: "#cbd4db", fontWeight: 400, fontSize: 14 }}>
          {props.text}
        </p>
      </Box>
    </Link>
  );
}

export default MenuItem;
