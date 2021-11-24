import React from "react";
import { Box, Text } from "@chakra-ui/react";
import s from "./MyTask.module.css";
interface TaskGroupHeaderProps {
  title: string;
}

function TaskGroupHeader(props: TaskGroupHeaderProps) {
  const { title } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  //handle click event
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box
      className={s.TaskGroupHeader}
      display="flex"
      my="3"
      minH="30px"
      alignItems="center"
      cursor="grab"
    >
      <Box color="#a2a0a2" _hover={{ color: "white" }}>
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          className={s.TaskGroupHeader__icon}
        >
          <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z"></path>
        </svg>
      </Box>
      <Box
        onClick={handleClick}
        cursor="pointer"
        mr="3"
        transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"}
      >
        <svg height="16px" width="16px" fill="#a2a0a2" viewBox="0 0 32 32">
          <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z"></path>
        </svg>
      </Box>
      <Text fontWeight="bold" color="white">
        {title}
      </Text>
    </Box>
  );
}

export default TaskGroupHeader;
