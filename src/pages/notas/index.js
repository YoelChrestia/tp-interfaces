import {
  Stack,
  TableContainer,
  Table,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { borders, colors, sizes } from "../../theme/theme";
import { FiltroNota } from "../materias/filtroNotas";

const alumnos = [
  {
    nombre: "Pedro",
    apellido: "Gomez",
    primeraNota: 5,
    segundaNota: 7,
    terceraNota: 9,
  },
  {
    nombre: "Luisa",
    apellido: "Pedri",
    primeraNota: 3,
    segundaNota: 8,
    terceraNota: 9,
  },
  {
    nombre: "Luca",
    apellido: "Bernacchia",
    primeraNota: 10,
    segundaNota: 10,
    terceraNota: 10,
  },
  {
    nombre: "Yoel",
    apellido: "Chrestia",
    primeraNota: 10,
    segundaNota: 10,
    terceraNota: 10,
  },
  {
    nombre: "Jazmin",
    apellido: "De Stefano",
    primeraNota: 10,
    segundaNota: 10,
    terceraNota: 10,
  },
  {
    nombre: "Jair",
    apellido: "Bustos",
    primeraNota: 7,
    segundaNota: 10,
    terceraNota: 4,
  },
  {
    nombre: "Manuel",
    apellido: "Gomez",
    primeraNota: 5,
    segundaNota: 6,
    terceraNota: 9,
  },
];

const materias = ["Matematica", "Fisica", "FisicaII"];

const Notas = ({ materia }) => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });
  const Notas = () => {
    return (
      <Stack direction={"column"} py={6}>
        <FiltroNota materias={materias} value={materia} />
        {materia === "" ? (
          materias.map((e, y) => {
            return (
              <Stack
                direction={"column"}
                w={"100%"}
                p={6}
                bgColor={colors.blue1}
                borderRadius={borders.borderRadius}
              >
                <Stack px={4}>
                  <Text fontSize={sizes.miniTitle}>{materias[y]} T.M</Text>
                </Stack>
                <TableContainer bg={"white"} borderRadius={"12px"}>
                  <Table
                    size="sm"
                    w={"100%"}
                    variant="striped"
                    colorScheme="gray"
                  >
                    <Thead>
                      <Tr>
                        <Th>Nombre del alumno</Th>
                        <Th>Primera Nota</Th>
                        <Th>Segunda Nota</Th>
                        <Th>Tercera Nota</Th>
                        <Th>Promedio</Th>
                        <Th>Condición</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {alumnos.map((alumno) => {
                        return (
                          <Tr>
                            <Td align="center" value={alumno.apellido}>
                              {alumno.nombre} {alumno.apellido}
                            </Td>
                            <Td align="center">{alumno.primeraNota}</Td>
                            <Td align="center">{alumno.segundaNota}</Td>
                            <Td align="center">{alumno.terceraNota}</Td>
                            <Td align="center">
                              {Math.round(
                                (alumno.primeraNota +
                                  alumno.segundaNota +
                                  alumno.terceraNota) /
                                  3
                              )}
                            </Td>
                            {(alumno.primeraNota +
                              alumno.segundaNota +
                              alumno.terceraNota) /
                              3 >=
                            7 ? (
                              <Td align="center" color={"green"}>
                                Aprobado
                              </Td>
                            ) : (
                              <Td align="center" color={"red"}>
                                Desaprobado
                              </Td>
                            )}
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
                <Stack w={"100%"}>
                  <Button
                    bgColor={colors.blue5}
                    alignSelf={"end"}
                    w={direction === "row" ? "15%" : "100%"}
                    size={"md"}
                    color={"white"}
                  >
                    Descargar PDF
                  </Button>
                </Stack>
              </Stack>
            );
          })
        ) : (
          <Stack
            direction={"column"}
            w={"100%"}
            p={6}
            bgColor={colors.blue1}
            gap={10}
            borderRadius={borders.borderRadius}
          >
            <Stack px={4}>
              <Text fontSize={sizes.miniTitle}>
                {materia === "Matematica" ? materias[0] : materias[1]} T.T
              </Text>
            </Stack>
            <Table size="sm" w={"100%"} variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th>Nombre del alumno</Th>
                  <Th>Primera Nota</Th>
                  <Th>Segunda Nota</Th>
                  <Th>Tercera Nota</Th>
                  <Th>Promedio</Th>
                  <Th>Condición</Th>
                </Tr>
              </Thead>
              <Tbody>
                {alumnos.map((alumno) => {
                  return (
                    <Tr>
                      <Td align="center" value={alumno.apellido}>
                        {alumno.nombre} {alumno.apellido}
                      </Td>
                      <Td align="center">{alumno.primeraNota}</Td>
                      <Td align="center">{alumno.segundaNota}</Td>
                      <Td align="center">{alumno.terceraNota}</Td>
                      <Td align="center">
                        {Math.round(
                          (alumno.primeraNota +
                            alumno.segundaNota +
                            alumno.terceraNota) /
                            3
                        )}
                      </Td>
                      {(alumno.primeraNota +
                        alumno.segundaNota +
                        alumno.terceraNota) /
                        3 >=
                      7 ? (
                        <Td align="center" color={"green"}>
                          Aprobado
                        </Td>
                      ) : (
                        <Td align="center" color={"red"}>
                          Desaprobado
                        </Td>
                      )}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>

            <Stack w={"100%"}>
              <Button
                bgColor={colors.blue5}
                alignSelf={"end"}
                w={direction === "row" ? "15%" : "100%"}
                size={"md"}
              >
                Descargar PDF
              </Button>
            </Stack>
          </Stack>
        )}
      </Stack>
    );
  };

  return <Notas />;
};

export default Notas;
