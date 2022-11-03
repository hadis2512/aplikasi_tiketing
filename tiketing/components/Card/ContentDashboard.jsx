import React from "react";
import { Container, Box, Text, Image, VStack, Grid } from "@chakra-ui/react";

const CardContent = () => {
  const myData = sessionStorage.getItem("email");
  return (
    <Grid maxW={"100%"}>
      <Box
        w={"100%"}
        h="150px"
        boxShadow={"xl"}
        rounded={"md"}
        bg="whiteAlpha.300"
        // p={[2, 2]}
        display={"flex"}
        alignItems="center"
        justifyContent={["space-evenly", "space-around"]}
      >
        <Box>
          <Text fontSize={["md", "lg", "3xl"]}>Halo Selamat Datang,</Text>
          <Text fontSize={["lg", "xl", "4xl"]} as="b">
            {myData}
          </Text>
        </Box>
        <Image
          boxSize={["100px", "150px"]}
          objectFit="contain"
          src="/welcome.svg"
          alt="Dan Abramov"
        />
      </Box>
    </Grid>
  );
};

export default CardContent;
