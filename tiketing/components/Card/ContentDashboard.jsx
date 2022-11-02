import React from "react";
import { Container, Box, Text, Image, VStack, Grid } from "@chakra-ui/react";
import {} from "@chakra-ui/icon";

const CardContent = () => {
  return (
    <Grid>
      <Box
        w="75%"
        h="150px"
        boxShadow={"xl"}
        rounded={"md"}
        bg="whiteAlpha.300"
        p={4}
        display={"flex"}
        alignItems="center"
        justifyContent={"space-evenly"}
      >
        <Text fontSize={"4xl"} as="b">
          Halo Selamat Datang Hadits
        </Text>
        <Image
          boxSize="100px"
          objectFit="cover"
          src="/welcome.svg"
          alt="Dan Abramov"
        />
      </Box>
    </Grid>
  );
};

export default CardContent;
