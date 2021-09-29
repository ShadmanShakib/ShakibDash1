import React from "react";
import { Box } from "@chakra-ui/react";
import { IText } from "./types";
function NormalText(props: IText) {
  const { text, underline } = props;
  return (
    <Box
      fontSize="14px"
      textDecoration={underline ? "underline" : "normal"}
      lineHeight="22px"
      color="#6f7782"
    >
      {text}
    </Box>
  );
}

export default NormalText;
