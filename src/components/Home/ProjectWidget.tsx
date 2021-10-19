import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import ProjectWidgetHeader from "./ProjectWidgetHeader";
function ProjectWidget() {
  return (
    <Box
      mb="16px"
      h="auto"
      bg="White"
      borderRadius="8px"
      position="relative"
      border="1px solid #edeae9"
    >
      <Box
        display="flex"
        flexDirection="column"
        maxH="400px"
        mb="16px"
        h="100%"
      >
        <ProjectWidgetHeader />

        {/* ProjectWidget Contents */}
        <Box overflowY="auto" pt="12px" px="24px" display="block" pb="8px">
          <Box
            display="grid"
            gridTemplateColumns="repeat (3,minmax(240px, 1fr))"
            mb="12px"
            gridRowGap="8px"
          >
            {/* Project Card */}
            <Box
              height="64px"
              cursor="pointer"
              bg="transparent"
              color="#1e1f21"
            >
              <Box className="ItemRow ItemRow--enabled RowStructure">
                <Box
                  height="59px"
                  borderRadius="8px"
                  display="flex"
                  alignItems="center"
                  border="1px solid transparent"
                  position="relative"
                  justifyContent="space-between"
                >
                  <Box className="RowStructure-leftChildren">
                    <HStack>
                      <svg
                        height="48px"
                        width="48px"
                        focusable="false"
                        viewBox="0 0 48 48"
                        cursor="pointer"
                        fill="white"
                      >
                        <path
                          d="M35.5,47.5h-23c-6.6,0-12-5.4-12-12v-23c0-6.6,5.4-12,12-12h23c6.6,0,12,5.4,12,12v23 C47.5,42.1,42.1,47.5,35.5,47.5z"
                          strokeDasharray="3.0432,2.0288"
                          stroke="#6d6e6f"
                          fill="transparant"
                        ></path>
                        <path
                          d="M32,24c0,0.6-0.4,1-1,1h-6v6c0,0.6-0.4,1-1,1s-1-0.4-1-1v-6h-6c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h6v-6c0-0.6,0.4-1,1-1 s1,0.4,1,1v6h6C31.6,23,32,23.4,32,24z"
                          fill="#6d6e6f"
                        ></path>
                      </svg>
                      <Box className="MultilineRowMetadataStructure-rightChildren">
                        <Box className="MultilineRowMetadataStructure-title">
                          <h6 className="ProjectsWidgetItemList-createNewProjectText Typography Typography--colorDarkGray1 Typography--h6 Typography--fontWeightMedium">
                            New&nbsp;Project
                          </h6>
                        </Box>
                      </Box>
                      <Box w="48px" h="59"></Box>
                    </HStack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectWidget;
