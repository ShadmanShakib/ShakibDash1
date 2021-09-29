import React from "react";
import { Box } from "@chakra-ui/react";
interface Props {
  icon: any;
  title: string;
  handleClick?: () => void;
}
function IconButton(props: Props) {
  const { icon, title, handleClick } = props;
  return (
    <Box
      onClick={handleClick}
      mb="8"
      w="100%"
      bg="white"
      borderColor="#cbd4db"
      color="#273240"
      fill="#6f7782"
      fontSize="16px"
      height="48px"
      lineHeight="48px"
      pos="relative"
      role="button"
      px="16px"
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      border="1px solid"
      borderRadius="6px"
      justifyContent="center"
      overflow="hidden"
      _hover={{ bg: "#f6f6f6" }}
      transitionDuration=".2s"
      transition="all"
    >
      {icon}
      <Box mx="10">{title}</Box>
    </Box>
  );
}

export default IconButton;
