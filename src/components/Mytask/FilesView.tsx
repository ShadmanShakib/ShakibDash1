import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
function FilesView() {
  return (
    <Box
      alignItems="center"
      flexDir="column"
      justifyContent="center"
      display="flex"
    >
      <Box
        px="40"
        py="10"
        bg="#1e1f21"
        borderRadius="10px"
        alignItems="center"
        flexDir="column"
        justifyContent="center"
        display="flex"
        border="1px solid"
        borderColor="brand.weak"
      >
        <Image
          h="100px"
          w="100px"
          alt="files"
          src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/1481d27df17776a253739858683cce7cdc6f4731/attachment.svg"
        />
        <Text fontWeight="semibold" fontSize="xl" color="white">
          No Files
        </Text>
      </Box>
    </Box>
  );
}

export default FilesView;
