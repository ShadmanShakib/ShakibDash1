import React from "react";
import { Box } from "@chakra-ui/react";
import { LogInCard } from "../../components/ui/cards";
import { setAuthenticated } from "../../store/Auth/AuthSlice";
import { useDispatch } from "react-redux";
function LogIn() {
  const dispatch = useDispatch();
  return (
    <Box>
      <LogInCard onClick={() => dispatch(setAuthenticated)} />
    </Box>
  );
}

export default LogIn;
