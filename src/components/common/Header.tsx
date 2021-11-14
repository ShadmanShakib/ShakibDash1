import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../hooks/useApp";
import { toggleSidebar } from "../../store/ui/SidebarSlice";
interface Props {
  title: string;
}
function Header(props: Props) {
  const { expanded } = useAppSelector((state) => state.Sidebar);
  const dispatch = useAppDispatch();
  const handleOpenSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Box
      display="flex"
      pl="8"
      alignItems="center"
      minH="72px"
      w="full"
      bg="#1e1f21"
      border="1px solid"
      borderBottomColor="gray.200"
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
              fill="white"
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
      <Text fontSize="xl" color="white" fontWeight="bold">
        {props.title}
      </Text>
    </Box>
  );
}

export default Header;
