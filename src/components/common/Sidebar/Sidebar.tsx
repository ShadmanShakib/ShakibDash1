import React from "react";
import { Box } from "@chakra-ui/react";
import SibebarHeader from "./SibebarHeader";
import MenuItem from "./MenuItem";
import "./Sidebar.module.css";
import { Home, Goals, Portfolios, Inbox, MyTask, Reporting } from "../../icons";
function Sidebar() {
  return (
    <Box w="240px" bg="#151b26">
      <SibebarHeader />
      <Box>
        <MenuItem text="Home" icon={<Home />} />
        <MenuItem
          text="My Tasks"
          icon={<MyTask height="20" width="20" fill="#cbd4db" />}
        />
        <MenuItem text="Inbox" icon={<Inbox fill="#cbd4db" />} />
        <MenuItem
          text="Reporting"
          icon={<Reporting height="20" width="20" fill="#cbd4db" />}
        />
        <MenuItem
          text="Portfolios"
          icon={<Portfolios height="20" width="20" fill="#cbd4db" />}
        />
        <MenuItem
          text="Goals"
          icon={<Goals height="20" width="20" fill="#cbd4db" />}
        />
      </Box>
    </Box>
  );
}

export default Sidebar;
