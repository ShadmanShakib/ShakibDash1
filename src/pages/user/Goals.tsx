import React from "react";
import { Box } from "@chakra-ui/react";
function Goals() {
  const [goals, setGoals] = React.useState([]);

  const handleClick = () => {
    setGoals([...goals]);
  };

  return (
    <Box>
      Goals
      <Box onClick={handleClick}></Box>
    </Box>
  );
}

export default Goals;
