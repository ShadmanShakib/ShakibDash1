import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../../hooks/useApp";
import { toggleSidebar } from "../../../store/ui/SidebarSlice";
function Topbar() {
  const { expanded } = useAppSelector((state) => state.Sidebar);
  const dispatch = useAppDispatch();
  const handleOpenSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Box
      bg="white"
      w="100%"
      position="sticky"
      minH="72px"
      px="24px"
      zIndex={200}
      display="flex"
      alignItems="center"
      shadow="md"
    >
      {!expanded && (
        <Box w="40px">
          <Box
            onClick={handleOpenSidebar}
            role="button"
            aria-label="Expand sidebar"
            tabIndex={0}
            h="36px"
            w="36px"
            borderRadius="6px"
            alignItems="center"
            display="inline-flex"
            justifyContent="center"
            border="1px solid"
            borderColor="transparent"
            cursor="pointer"
          >
            <svg
              fill="#6f7782"
              height="16px"
              width="16px"
              focusable="false"
              viewBox="0 0 32 32"
            >
              <path d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"></path>
            </svg>
          </Box>
        </Box>
      )}

      <Box
        display="inline-flex"
        flexDirection="column"
        flexGrow={1}
        flexShrink={1}
        justifyContent="center"
        fontSize="20px"
        mr="4px"
        fontWeight="500"
      >
        <h1>Home</h1>
      </Box>
      <Box display="flex" position="relative" alignItems="center">
        <Input
          borderRadius="16px"
          variant="unstyled"
          w="140px"
          h="32px"
          borderWidth="1px"
          borderColor="#cbd4db"
          pr="16px"
          pl="32px"
          type="text"
          id="topbar_search_input"
          placeholder="Search"
        />
        <Box left="5px" position="absolute">
          <svg
            fill="#6f7782"
            height="16px"
            width="24px"
            focusable="false"
            viewBox="0 0 32 32"
          >
            <path d="M29.707,28.293l-8.256-8.256C23.042,18.13,24,15.677,24,13c0-6.075-4.925-11-11-11S2,6.925,2,13s4.925,11,11,11c2.677,0,5.13-0.958,7.037-2.549l8.256,8.256L29.707,28.293z M4,13c0-4.963,4.037-9,9-9c4.963,0,9,4.037,9,9s-4.037,9-9,9C8.037,22,4,17.963,4,13z"></path>
          </svg>
        </Box>
        <Box
          cursor="pointer"
          ml="12px"
          height="28px"
          w="28px"
          borderRadius="50%"
          bgImage="linear-gradient(to top right, #ff5263 0%, #ff7381 35%, #fcbd01 100%);"
          role="button"
          display="flex"
          alignItems="center"
          justifyContent="center"
          aria-label="Create new"
          aria-expanded="false"
          tabIndex={0}
        >
          <svg
            height="16px"
            width="16px"
            fill="white"
            focusable="false"
            viewBox="0 0 32 32"
          >
            <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path>
          </svg>
        </Box>

        <a
          href="/#"
          className="TopbarPageHeaderGlobalActions-settingsMenuButton DeprecatedAnchor"
          aria-controls="lui_7"
          aria-expanded="false"
          id="lui_6"
        >
          <Box
            ml="12px"
            h="28px"
            w="28px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#14aaf5"
            borderRadius="50%"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              width="16px"
              fill="white"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Box>
        </a>
      </Box>
    </Box>
  );
}

export default Topbar;
