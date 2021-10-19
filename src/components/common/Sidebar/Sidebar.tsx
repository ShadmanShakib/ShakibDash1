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
  ExtendedFavorites,
  ExtendedSearches,
} from ".";
import Menu from "./Menu";
import { useAppDispatch, useAppSelector } from "../../../hooks";

import {
  toggleSidebar,
  toggleFavorite,
  toggleSearches,
} from "../../../store/ui/SidebarSlice";

function Sidebar() {
  const { expanded, isFavorite, isSearches } = useAppSelector(
    (state) => state.Sidebar
  );
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleSidebar());
  };
  const ToggleFavorite = () => {
    dispatch(toggleFavorite());
  };
  const ToggleSearches = () => {
    dispatch(toggleSearches());
  };
  return (
    <Box
      w={expanded ? "240px" : "0"}
      visibility={expanded ? "visible" : "hidden"}
      display="flex"
      flexDir="column"
      bg="#151b26"
      flexBasis="auto"
      flexShrink={0}
      flexGrow={0}
    >
      <SibebarHeader onClick={handleClick} />
      <Menu />

      <Box className={cn(s.CustomScrollbarScrollable)}>
        <Box className={cn(s.Scrollable_vertical)}>
          <Box className={cn(s.SidebarCollapsableSection)}>
            <SidebarCollapsableHeader
              onClick={ToggleFavorite}
              isCollapsed={isFavorite}
              children={<ExtendedFavorites />}
              title="Favorites"
            />
            <SidebarCollapsableHeader
              isCollapsed={isSearches}
              onClick={ToggleSearches}
              children={<ExtendedSearches />}
              title="Saved searches"
            />
            <SidebarWorkSpace />
          </Box>
        </Box>
      </Box>
      <BaseButton />
      <SidebarLearningHubButton />
    </Box>
  );
}

export default Sidebar;
