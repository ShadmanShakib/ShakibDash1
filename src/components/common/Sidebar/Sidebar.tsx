import React from "react";
import { Box } from "@chakra-ui/react";
import SibebarHeader from "./SibebarHeader";
import s from "./Sidebar.module.css";
import cn from "classnames";
import {
  SidebarCollapsableHeader,
  BaseButton,
  SidebarLearningHubButton,
  SidebarWorkSpace,
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
    <Box w={expanded ? "240px" : "0"}>
      <Box
        w="240px"
        display="flex"
        flexDir="column"
        bg="#151b26"
        flexBasis="auto"
        flexShrink={1}
        flexGrow={1}
        minH="100vh"
      >
        <SibebarHeader onClick={handleClick} />
        <Menu />

        <Box className={cn(s.CustomScrollbarScrollable)}>
          <Box className={cn(s.Scrollable_vertical)}>
            <Box className={cn(s.SidebarCollapsableSection)}>
              <SidebarCollapsableHeader title="Favorites" />
              <SidebarCollapsableHeader title="Saved searches" />
              <SidebarWorkSpace />
            </Box>
          </Box>
        </Box>
        <BaseButton />
        <SidebarLearningHubButton />
      </Box>
    </Box>
  );
}

export default Sidebar;
