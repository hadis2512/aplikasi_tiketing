import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const LayoutContainer = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      {children}
    </Box>
  );
};

export default LayoutContainer;
