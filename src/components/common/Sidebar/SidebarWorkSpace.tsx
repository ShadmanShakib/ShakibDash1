import React from "react";
import s from "./Sidebar.module.css";
import cn from "classnames";
import { Box } from "@chakra-ui/react";
function SidebarWorkSpace(): JSX.Element {
  return (
    <a className={cn(s.SidebarWorkspaceHeader)} href="/#">
      <div className="SidebarWorkspaceHeader-workspaceName">My Workspace</div>
      <Box
        role="button"
        aria-label="Add to this team"
        aria-expanded="false"
        tabIndex={0}
      >
        <svg className={s.MiniIcon} focusable="false" viewBox="0 0 24 24">
          <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path>
        </svg>
      </Box>
    </a>
  );
}

export default SidebarWorkSpace;
