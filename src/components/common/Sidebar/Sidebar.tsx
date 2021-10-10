import React from "react";
import { Box } from "@chakra-ui/react";
import SibebarHeader from "./SibebarHeader";
import s from "./Sidebar.module.css";
import {
  SidebarCollapsableHeader,
  BaseButton,
  SidebarLearningHubButton,
} from ".";
import Menu from "./Menu";
import { useSidebar, useAppDispatch, useAppSelector } from "../../../hooks";

import { toggleSidebar } from "../../../store/ui/SidebarSlice";

function Sidebar() {
  const { expanded, openFavorite } = useAppSelector((state) => state.Sidebar);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Box>
      <Box
        w="240px"
        display="flex"
        flexDir="column"
        bg="#151b26"
        flexBasis="auto"
        minH="1px"
        flexShrink={1}
        flexGrow={1}
      >
        <SibebarHeader />
        <Menu />

        <SidebarCollapsableHeader title="Favorites" />
        <SidebarCollapsableHeader title="Saved searches" />
        <BaseButton />
        <SidebarLearningHubButton />
      </Box>
    </Box>
  );
}

export default Sidebar;
