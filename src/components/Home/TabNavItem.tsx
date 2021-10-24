import React from "react";
import { Text } from "@chakra-ui/react";
interface Props {
  selected: boolean;
  title: string;
  onClick: () => void;
}
export default function TabNavItem(props: Props) {
  return (
    <Text
      cursor="pointer"
      pb="1"
      color="#6d6e6f"
      fontSize="14px"
      fontWeight="500"
      flexShrink={1}
      borderBottomWidth="2px"
      _selected={{ borderBottomColor: "rgb(109,110,111)" }}
      aria-selected={props.selected}
      borderColor="white"
      onClick={props.onClick}
    >
      {props.title}
    </Text>
  );
}
