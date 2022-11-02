import React from "react";
import DataTable from "react-data-table-component";
import { Stack, Text, Button } from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";

const ContentDataAntrian = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
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

        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <DataTable columns={columns} data={data} />
        </Stack>
      </Stack>
    </>
  );
};

export default ContentDataAntrian;
