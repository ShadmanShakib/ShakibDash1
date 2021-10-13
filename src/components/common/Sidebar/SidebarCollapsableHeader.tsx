import React, { Children } from "react";
import s from "./Sidebar.module.css";
import { Box } from "@chakra-ui/react";
import cn from "classnames";
interface Props {
  isCollapsed: boolean;
  title: string;
  onClick: () => void;
  children?: any;
}

function SidebarCollapsableHeader(props: Props) {
  const IconClass = cn(s.MiniIcon);
  return (
    <Box py="8px" borderColor="#273240" borderWidth="1px">
      <button
        onClick={props.onClick}
        className={s.SidebarCollapsibleHeader}
        aria-expanded="true"
      >
        <span>{props.title}</span>
        <svg className={IconClass} focusable="false" viewBox="0 0 24 24">
          <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
        </svg>
      </button>
      {props.isCollapsed && props.children}
    </Box>
  );
}

export default SidebarCollapsableHeader;
