import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Textarea,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiCamera } from "react-icons/fi";

export default function SignupCard() {
  const toast = useToast();
  const upload = (e) => {
    e.preventDefault;
    document.getElementById("upload").click();
  };

  const gantiFile = (e) => {
    e.preventDefault;
    let uploadMsg = document.getElementById("fileUpload");
    // let ganti = document.getElementById("gantiFile").val();
    // display file name if file has been selected
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      console.log(img.name);
      uploadMsg.value = img.name;
    }
  };
  const saveAntrian = (e) => {
    toast({
      title: "Data berhasil ditambahkan.",
      description: "Silahkan tunggu admin merespon pengajuan anda!.",
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };

  return (
    <>
      <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" bg={"ghostwhite"}>
        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <Text
            fontWeight="bold"
            fontSize={"3xl"}
            color="black"
            fontFamily={"monospace"}
            mb={2}
          >
            Tambah Data Antrian
          </Text>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignContent={"stretch"}
        >
          <Box
            rounded={"lg"}
            w={["500vh", "100%"]}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="tujuan" isRequired>
                <FormLabel>Kategori</FormLabel>
                <Select placeholder="Pilih Kategori">
                  <option value="option1">
                    IT Software Developer & Programmer
                  </option>
                  <option value="option2">IT Support & Hardware</option>
                  <option value="option3">Engineering</option>
                </Select>
              </FormControl>

              <FormControl id="subject" isRequired>
                <FormLabel>Subject</FormLabel>
                <Input type="text" mb={2} placeholder="Subject" />
                <Textarea placeholder="Jelaskan Kebutuhan Anda!" />
              </FormControl>
              <FormControl id="attach" isRequired>
                <FormLabel>Attachment</FormLabel>
                <Box display={"flex"} justifyContent="space-between">
                  <Input
                    type={"text"}
                    placeholder="Belum ada file yang terpilih"
                    id="fileUpload"
                    isReadOnly
                  />
                  <Input
                    id="upload"
                    onChange={gantiFile}
                    type="file"
                    display={"none"}
                  />
                  <Box>
                    <Button
                      rightIcon={<FiCamera />}
                      ml="3"
                      onClick={(e) => upload(e)}
                      size="md"
                    >
                      Pilih File
                    </Button>
                  </Box>
                </Box>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  onClick={saveAntrian}
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Simpan
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
