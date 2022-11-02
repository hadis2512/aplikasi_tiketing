import React from "react";
import {
  Box,
  List,
  ListItem,
  useColorMode,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const NavSection = () => {
  return (
    <ListItem borderRadius="md" my="3">
      <Link>
        <ChakraLink
          alignItems="center"
          display="flex"
          borderRadius="md"
          _hover={{
            background: colorMode === "dark" ? "gray.700" : "gray.100",
            boxShadow: "xl",
          }}
          p="3"
        >
          {icon}
          <Text
            color={colorMode === "dark" ? "gray.100" : "gray.700"}
            fontWeight="500"
            fontSize="sm"
            casing="uppercase"
            mx="5"
            display={["inline", "inline", "inline", "inline"]}
            _groupHover={{ display: "inline" }}
          ></Text>
        </ChakraLink>
      </Link>
    </ListItem>
  );
};

export default NavSection;
