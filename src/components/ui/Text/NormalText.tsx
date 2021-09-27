import React from "react";
import { Box } from "@chakra-ui/react";
import { IText } from "./types";
function NormalText({ text }: IText) {
  return (
    <Box fontSize="14px" lineHeight="22px" color="#6f7782">
      {text}
    </Box>
  );
}

export default NormalText;
