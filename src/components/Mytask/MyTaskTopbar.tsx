import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../hooks/useApp";
import { setSelectedTaskId } from "../../store/ui/MyTaskSlice";
type id = "list" | "board" | "calendar" | "file";
function Topbar() {
  const dispatch = useAppDispatch();
  const selectSelectedTaskId = useAppSelector(
    (state) => state.myTask.selectedTaskId
  );

  const handleClick = (id: id) => {
    dispatch(setSelectedTaskId(id));
  };
  return (
    <Box
      minH="72px"
      px="24px"
      position="relative"
      display="flex"
      alignItems="center"
      boxSizing="border-box"
      flexShrink={0}
      zIndex={200}
      bg="#1e1f21"
    >
      <Box display="flex">
        <Box display="flex" alignItems="center" minH="72px" maxW="100%">
          <Image
            h="14"
            w="14"
            borderRadius="50%"
            src="https://avatars.githubusercontent.com/u/72305492?s=96&v=4"
          />
          <Box ml="6">
            <Box display="flex" alignItems="center">
              <Box color="white" fontSize="20px" mr="6px" lineHeight="28px">
                My&nbsp;Tasks
              </Box>
              <Box
                role="button"
                aria-label="Show options"
                aria-expanded="false"
                tabIndex={0}
              >
                <svg
                  height="16px"
                  width="16px"
                  focusable="false"
                  viewBox="0 0 32 32"
                  fill="white"
                >
                  <path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1s1.5-0.7,2.1-0.2l10,8.2l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z"></path>
                </svg>
              </Box>
            </Box>
            <Box>
              <Box display="flex">
                <Box
                  cursor="pointer"
                  aria-selected={selectSelectedTaskId === "list"}
                  _selected={{ fontWeight: "bold", color: "white" }}
                  onClick={() => {
                    dispatch(setSelectedTaskId("list"));
                  }}
                  color="brand.weak"
                >
                  List
                </Box>
                <Box
                  cursor="pointer"
                  aria-selected={selectSelectedTaskId === "board"}
                  _selected={{ fontWeight: "bold", color: "white" }}
                  onClick={() => handleClick("board")}
                  color="brand.weak"
                  ml="24px"
                >
                  Board
                </Box>
                <Box
                  cursor="pointer"
                  aria-selected={selectSelectedTaskId === "calendar"}
                  _selected={{ fontWeight: "bold", color: "white" }}
                  onClick={() => handleClick("calendar")}
                  color="brand.weak"
                  ml="24px"
                >
                  Calendar
                </Box>
                <Box
                  cursor="pointer"
                  aria-selected={selectSelectedTaskId === "file"}
                  _selected={{ fontWeight: "bold", color: "white" }}
                  onClick={() => handleClick("file")}
                  color="brand.weak"
                  ml="24px"
                >
                  Files
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Topbar;
