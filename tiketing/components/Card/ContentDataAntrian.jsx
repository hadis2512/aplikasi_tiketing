import React from "react";
import DataTable from "react-data-table-component";
import {
  Stack,
  Text,
  Button,
  Badge,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Textarea,
  Box,
  Divider,
} from "@chakra-ui/react";
import { FiCamera } from "react-icons/fi";

const ContentDataAntrian = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
    },
    {
      name: "Tiket Id",
      selector: (row) => row.tiketId,
    },
    {
      name: "Pengaju",
      selector: (row) => row.pengaju,
    },
    {
      name: "Tujuan",
      selector: (row) => row.tujuan,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const badge = (children, a) => {
    return (
      <Badge colorScheme={a} p={1} borderRadius="full">
        <Text fontSize={11} fontFamily="mono">
          {children}
        </Text>
      </Badge>
    );
  };
  const detail = () => {
    return (
      <Button
        colorScheme={"linkedin"}
        borderRadius="base"
        P={1}
        size={"xs"}
        onClick={onOpen}
      >
        <Text fontSize={11} fontFamily="monospace">
          Detail
        </Text>
      </Button>
    );
  };

  const data = [
    {
      no: 1,
      tiketId: "T000001",
      pengaju: "Hadits",
      tujuan: "It Software Development &Programmer",
      subject: "Pembuatan aplikasi absensi...",
      status: badge("Selesai", "green"),
      action: detail(),
    },
    {
      no: 2,
      tiketId: "T000002",
      pengaju: "Hadits",
      tujuan: "It Support & Hardware",
      subject: "Install ulang operasi sistem komputer...",
      status: badge("Progress", "yellow"),
      action: detail(),
    },
  ];
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
            Data Antrian
          </Text>
        </Stack>

        <Stack>
          <DataTable columns={columns} data={data} pagination />
        </Stack>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontFamily={"monospace"}>Data T000001</Text>
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <FormControl id="tujuan" isRequired mb={2}>
              <FormLabel>Kategori</FormLabel>
              <Select placeholder="Pilih Kategori">
                <option value="option1" selected>
                  IT Software Developer & Programmer
                </option>
                <option value="option2">IT Support & Hardware</option>
                <option value="option3">Engineering</option>
              </Select>
            </FormControl>

            <FormControl id="subject" isRequired mb={2}>
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                mb={2}
                placeholder="Subject"
                value={"It Software Development & Programmer"}
              />
              <Textarea
                placeholder="Jelaskan Kebutuhan Anda!"
                value={
                  "Pembuatan aplikasi absensi untuk bagian pemasaran dan proyek"
                }
              />
            </FormControl>
            <FormControl id="attach" isRequired>
              <FormLabel>Attachment</FormLabel>
              <Box display={"flex"} justifyContent="space-between">
                <Input
                  type={"text"}
                  placeholder="Belum ada file yang terpilih"
                  value={"proposal_pengajuan_app.pdf"}
                  id="fileUpload"
                  isReadOnly
                />
                <Input
                  id="upload"
                  onChange={gantiFile}
                  type="file"
                  display={"none"}
                />
                <Button
                  rightIcon={<FiCamera />}
                  ml="3"
                  p={5}
                  onClick={(e) => upload(e)}
                  size="md"
                >
                  Pilih File
                </Button>
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Kembali
            </Button>
            {/* <Button variant="ghost" colorScheme="cyan">
              Ubah Data
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContentDataAntrian;
