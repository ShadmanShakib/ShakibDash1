import React from "react";
import { Box } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { taskCompleted } from "../../store/Project/TaskSlice";
function MyTaskList() {
  const Tasks = useAppSelector((state) => state.Tasks);
  const dispatch = useAppDispatch();
  return (
    <Box
      flexGrow={1}
      flexShrink={1}
      pb="4px"
      minH="1px"
      overflowY="auto"
      display="block"
    >
      {Tasks &&
        Tasks.map((task) => {
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              h="34px"
              alignItems="center"
              position="relative"
              borderTop="1px solid transparant"
              borderBottom="1px solid"
              borderColor="gray.300"
              key={task.id}
              mx="24px"
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                flexGrow={1}
                flexShrink={1000}
                h="100%"
              >
                <Box display="inline-flex" mr="8px" cursor="pointer">
                  <svg
                    onClick={() => dispatch(taskCompleted(task.id))}
                    height="16px"
                    width="16px"
                    focusable="false"
                    viewBox="0 0 32 32"
                    style={{
                      alignSelf: "center",
                      strokeWidth: "2px",
                      marginRight: "8px",
                      width: "16px",
                    }}
                    fontSize="20px"
                    display="block"
                    stroke="#6d6e6f"
                    fill="white"
                  >
                    <path d="M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z"></path>
                    <path d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z"></path>
                  </svg>
                </Box>
                <Box> {task.body}</Box>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
}

export default MyTaskList;
