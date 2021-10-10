import React from "react";
import s from "./Sidebar.module.css";
import { Box } from "@chakra-ui/react";
interface Props {
  isCollapsed?: boolean;
  title: string;
}

function SidebarCollapsableHeader(props: Props) {
  return (
    <Box py="8px" borderColor="#273240" borderWidth="1px">
      <button className={s.SidebarCollapsibleHeader} aria-expanded="true">
        <span className="SidebarCollapsibleHeader-name Typography Typography--m Typography--fontWeightMedium Typography--textAlignLeft">
          {props.title}
        </span>
        <svg className={s.MiniIcon} focusable="false" viewBox="0 0 24 24">
          <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
        </svg>
      </button>
    </Box>
  );
}

export default SidebarCollapsableHeader;
