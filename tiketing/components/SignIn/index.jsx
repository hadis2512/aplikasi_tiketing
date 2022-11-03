import {
  Button,
  useToast,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

export default function SplitScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgetEmail, setForgetEmail] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleForget = (e) => setForgetEmail(e.target.value);

  const emailKosong = email === "";
  const passwordKosong = password === "";
  const isError2 = forgetEmail === "";
  const router = useRouter();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickLogin = (e, login) => {
    e.prevenDefault;
    {
      emailKosong
        ? toast({
            title: "Login Gagal.",
            description: "Silahkan Isi Email anda!.",
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        : passwordKosong
        ? toast({
            title: "Login Gagal.",
            description: "Silahkan Isi Password anda!.",
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        : Swal.fire({
            title: "Login Berhasil!",
            text: `Halo, Selamat Datang ${email}`,
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            sessionStorage.setItem("email", email);
            router.push(login);
          });
    }
  };

  const handleClickForget = (e) => {
    e.preventDefault;

    {
      isError2
        ? toast({
            title: "Email kosong.",
            description: "Kolom email harus di isi!.",
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
        : toast({
            title: "Berhasil terkirim.",
            description: `Silahkan cek email ${forgetEmail} untuk merubah password!.`,
            position: "top",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
      onClose();
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"} fontStyle={""}>
            Sign In Ticketing App
          </Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Harap isi email dengan valid"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Harap isi password dengan valid"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Button colorScheme="blue" variant={"ghost"} onClick={onOpen}>
                Lupa Password?
              </Button>
            </Stack>
            <Button
              colorScheme="telegram"
              variant={"solid"}
              onClick={(e) => handleClickLogin(e, "/Dashboard")}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          src={"/welcome_login.svg"}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lupa Password!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                value={forgetEmail}
                onChange={handleForget}
                placeholder="Silahkan masukan email anda!"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Batal
            </Button>
            <Button
              variant="ghost"
              colorScheme="cyan"
              onClick={(e) => handleClickForget(e)}
            >
              Kirim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
