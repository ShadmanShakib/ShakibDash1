import React from "react";
import { Box, Button } from "@chakra-ui/react";
import SibebarHeader from "./SibebarHeader";
import s from "./Sidebar.module.css";
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

        <Box py="8px" borderColor="#273240" borderWidth="1px">
          <button className={s.SidebarCollapsibleHeader} aria-expanded="true">
            <span className="SidebarCollapsibleHeader-name Typography Typography--m Typography--fontWeightMedium Typography--textAlignLeft">
              Favorites
            </span>
            <svg className={s.MiniIcon} focusable="false" viewBox="0 0 24 24">
              <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
            </svg>
          </button>
        </Box>
        <Box py="8px" borderColor="#273240" borderWidth="1px">
          <button
            onClick={handleClick}
            className={s.SidebarCollapsibleHeader}
            aria-expanded="false"
          >
            <span className="SidebarCollapsibleHeader-name Typography Typography--m Typography--fontWeightMedium Typography--textAlignLeft">
              Saved searches
            </span>
            <svg className={s.MiniIcon} focusable="false" viewBox="0 0 24 24">
              <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
            </svg>
          </button>
          <Box color="white">{expanded ? "Hello" : "Hi"}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
