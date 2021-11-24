import React from "react";
import { Box, Text } from "@chakra-ui/react";

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
    <Box display="flex" alignItems="center">
      <Box
        onClick={handleClick}
        cursor="pointer"
        area-selected={isOpen}
        transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"}
      >
        <svg height="16px" width="16px" fill="#a2a0a2" viewBox="0 0 32 32">
          <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z"></path>
        </svg>
      </Box>
      <Text color="brand.weak"> {title}</Text>
    </Box>
  );
}

export default TaskGroupHeader;
