import React from "react";
import { Link } from "@chakra-ui/layout";
import { ILink } from "./types";

function LinkText(props: ILink) {
  return (
    <Link
      color="#14aaf5"
      textDecoration="underline"
      fontSize="14px"
      _hover={{ color: "#008ce3" }}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}

export default LinkText;
