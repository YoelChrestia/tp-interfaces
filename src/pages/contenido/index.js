import {
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useBreakpointValue,
  Table,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
  Button,
} from "@chakra-ui/react";
import { colors, borders, sizes } from "../../theme/theme";

const alumnos = [
  {
    nombre: "Teoria 1",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Teoria 2",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Teoria 3",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Teoria 4",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Teoria 5",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Teoria 6",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Teoria 7",
    cantidadAsistencia: "04/11/2022",
  },
];

const alumnos2 = [
  {
    nombre: "Práctica 1",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Práctica 2",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Práctica 3",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Práctica 4",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Práctica 5",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Práctica 6",
    cantidadAsistencia: "04/11/2022",
  },
  {
    nombre: "Práctica 7",
    cantidadAsistencia: "04/11/2022",
  },
];

const Contenido = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });
  return (
    <>
      <Stack
        direction={"column"}
        w={"100%"}
        p={6}
        bgColor={colors.blue1}
        gap={10}
        borderRadius={borders.borderRadius}
      >
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton _hover={{ background: "transparent" }}>
              <Stack
                flex="1"
                textAlign="left"
                bgColor={colors.blue5}
                color={"white"}
                direction={"row"}
                p={4}
                borderRadius={borders.borderRadius}
                justify={"space-between"}
              >
                <Stack direction={"row"}>
                  <Text>Subir contenido</Text>
                </Stack>

                <AccordionIcon color={colors.buttonGreen} />
              </Stack>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Stack
                spacing={3}
                w={"100%"}
                justify={"space-between"}
                direction={direction === "row" ? "row" : "column"}
              >
                <Stack
                  w={direction === "row" ? "50%" : "100%"}
                  h={"70px"}
                  bgColor={"white"}
                  align={"center"}
                  justify={"center"}
                  borderRadius={borders.borderRadius}
                  cursor="pointer"
                  direction={"row"}
                  _hover={{ color: colors.blue3 }}
                >
                  <Text>Teoria</Text>
                  <AccordionIcon />
                </Stack>
                <Stack
                  w={direction === "row" ? "50%" : "100%"}
                  h={"70px"}
                  bgColor={"white"}
                  align={"center"}
                  justify={"center"}
                  borderRadius={borders.borderRadius}
                  cursor="pointer"
                  direction={"row"}
                  _hover={{ color: colors.blue3 }}
                >
                  <Text>Práctica</Text>
                  <AccordionIcon />
                </Stack>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton _hover={{ background: "transparent" }}>
              <Stack
                flex="1"
                textAlign="left"
                bgColor={colors.blue5}
                color={"white"}
                direction={"row"}
                p={4}
                borderRadius={borders.borderRadius}
                justify={"space-between"}
              >
                <Stack direction={"row"}>
                  <Text>Teoría</Text>
                </Stack>

                <AccordionIcon color={colors.buttonGreen} />
              </Stack>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Stack
                spacing={3}
                w={"100%"}
                justify={"space-between"}
                direction={direction === "row" ? "row" : "column"}
              >
                <Stack
                  w={"100%"}
                  bgColor={"white"}
                  align={"center"}
                  justify={"center"}
                  borderRadius={borders.borderRadius}
                  cursor="pointer"
                  direction={"row"}
                  _hover={{ color: colors.blue3 }}
                >
                  <Table
                    size="sm"
                    w={"100%"}
                    variant="striped"
                    colorScheme="gray"
                  >
                    <Thead>
                      <Tr>
                        <Th>Nombre del archivo</Th>
                        <Th>Fecha de subida</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {alumnos.map((alumno) => {
                        return (
                          <Tr>
                            <Td align="center">{alumno.nombre}</Td>
                            <Td
                              align="center"
                              value={alumno.cantidadAsistencia}
                            >
                              {alumno.cantidadAsistencia}
                            </Td>
                            <Td align="center">
                              <Button
                                bgColor={colors.red}
                                fontSize={sizes.details}
                                size={"sm"}
                                color={"white"}
                                _hover={{ bgColor: "black" }}
                              >
                                Eliminar
                              </Button>
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </Stack>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton _hover={{ background: "transparent" }}>
              <Stack
                flex="1"
                textAlign="left"
                bgColor={colors.blue5}
                color={"white"}
                direction={"row"}
                p={4}
                borderRadius={borders.borderRadius}
                justify={"space-between"}
              >
                <Stack direction={"row"}>
                  <Text>Práctica</Text>
                </Stack>
                <AccordionIcon color={colors.buttonGreen} />
              </Stack>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Stack
                spacing={3}
                w={"100%"}
                justify={"space-between"}
                direction={direction === "row" ? "row" : "column"}
              >
                <Stack
                  w={"100%"}
                  bgColor={"white"}
                  align={"center"}
                  justify={"center"}
                  borderRadius={borders.borderRadius}
                  cursor="pointer"
                  direction={"row"}
                  _hover={{ color: colors.blue3 }}
                >
                  <Table
                    size="sm"
                    w={"100%"}
                    variant="striped"
                    colorScheme="gray"
                  >
                    <Thead>
                      <Tr>
                        <Th>Nombre del archivo</Th>
                        <Th>Fecha de subida</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {alumnos2.map((alumno) => {
                        return (
                          <Tr>
                            <Td align="center">{alumno.nombre}</Td>
                            <Td
                              align="center"
                              value={alumno.cantidadAsistencia}
                            >
                              {alumno.cantidadAsistencia}
                            </Td>
                            <Td align="center">
                              <Button
                                fontSize={sizes.details}
                                size={"sm"}
                                bgColor={colors.red}
                                color={"white"}
                                _hover={{ bgColor: "black" }}
                              >
                                Eliminar
                              </Button>
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </Stack>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </>
  );
};

export default Contenido;
