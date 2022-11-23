import { borders, colors, sizes } from "../../theme/theme";

import {
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Textarea,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";
import { ListaDeEventos } from "../calendar";

const Home = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  return (
    <Stack
      bgColor={colors.blue1}
      w={"100%"}
      direction={direction}
      borderRadius={borders.borderRadius}
    >
      <Stack
        bgColor={colors.blue1}
        w={direction === "row" ? "40%" : "100%"}
        direction={"column"}
        gap={5}
        p={6}
        borderRadius={borders.borderRadius}
      >
        <Stack gap={2}>
          <Stack
            bg={colors.blue5}
            borderRadius={"12px"}
            px={5}
            py={2}
            direction="row"
          >
            <Text color="white" w="auto">
              Bloc de Notas
            </Text>
          </Stack>
          <Textarea
            placeholder="Anotaciones"
            size="lg"
            bg={"white"}
            fontSize={sizes.text}
            border="none"
            borderRadius={"12px"}
            _focusVisible={{ border: "none" }}
            w={"100%"}
          />
          <CustomButton
            bgColor={colors.buttonGreen}
            link={"#"}
            color={"white"}
            fontSize={sizes.details}
            texto={"Guardar"}
            width={"150px"}
          />
          <Stack px={5} py={2} bg={"white"} borderRadius={"12px"}>
            <Text>
              Revisar las notas de matematica de 2do, hubo un problema con la
              nota de quimey lopez
            </Text>
          </Stack>
          <Stack px={5} py={2} bg={"white"} borderRadius={"12px"}>
            <Text>Avisar sobre la excursión</Text>
          </Stack>
        </Stack>
        <Stack direction={"column"} align={"start"} gap={2}>
          <Stack
            bg={colors.blue5}
            borderRadius="12px"
            px={5}
            py={2}
            direction="row"
            w="100%"
          >
            <Text color="white">
              Ultimos Mensajes
            </Text>
          </Stack>
          <TableContainer bg={"white"} borderRadius={"12px"}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color={colors.buttonGreen}>Remitente</Th>
                  <Th color={colors.buttonGreen}>Asunto</Th>
                  <Th isNumeric color={colors.buttonGreen}>
                    Fecha
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr
                  _hover={{
                    background: "rgb(150,150,150,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <Td>Julian Bravo</Td>
                  <Td>Recuperatorio</Td>
                  <Td isNumeric>20-11-22</Td>
                </Tr>
                <Tr
                  _hover={{
                    background: "rgb(150,150,150,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <Td>Rocío Oliva</Td>
                  <Td>Consultita</Td>
                  <Td isNumeric>19-11-22</Td>
                </Tr>
                <Tr
                  _hover={{
                    background: "rgb(150,150,150,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <Td>María Paz</Td>
                  <Td>Trabajo Practico</Td>
                  <Td isNumeric>19-11-22</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
      <Stack p={6} w={direction === "row" ? "60%" : "100%"} gap={2}>
        <Stack
          bg={colors.blue5}
          borderRadius={"12px"}
          px={5}
          py={2}
          direction="row"
          width={"auto"}
        >
          <Text width={"auto"} color="white">
            Calendario
          </Text>
        </Stack>
        <Stack
          direction={direction === "row" ? "row" : "column"}
          justify={"space-between"}
          gap={direction === "row" ? 0 : 2}
        >
          <Image
            src="/images/calendar.png"
            width={direction === "row" ? "60%" : "100%"}
            borderRadius="12px"
          ></Image>
          <Stack width={direction === "row" ? "35%" : "100%"}>
            {ListaDeEventos.map((evento) => {
              return (
                <Stack direction={"row"} align={"center"}>
                  <Box
                    bgColor={colors.blue4}
                    width={"10px"}
                    height={"10px"}
                    borderRadius={"50%"}
                  />
                  <Text cursor={"pointer"} _hover={{ color: colors.blue3 }}>
                    {evento.length > 30 ? evento.slice(0, 30) + "..." : evento}
                  </Text>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
