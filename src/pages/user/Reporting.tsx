import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common";

function Reporting() {
  const uri = `${process.env.REACT_APP_API_URI}`;
  React.useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Box display="flex" minH="100vh">
      <Sidebar />
    </Box>
  );
}

export default Reporting;
