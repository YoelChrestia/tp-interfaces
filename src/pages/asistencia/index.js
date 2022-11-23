import {
  Stack,
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

const alumnos = [
  {
    nombre: "Pedro",
    apellido: "Gomez",
    cantidadAsistencia: 25,
  },
  {
    nombre: "Luisa",
    apellido: "Pedri",
    cantidadAsistencia: 0,
  },
  {
    nombre: "Luca",
    apellido: "Bernacchia",
    cantidadAsistencia: 15,
  },
  {
    nombre: "Yoel",
    apellido: "Chrestia",
    cantidadAsistencia: 4,
  },
  {
    nombre: "Jazmin",
    apellido: "De Stefano",
    cantidadAsistencia: 27,
  },
  {
    nombre: "Jair",
    apellido: "Bustos",
    cantidadAsistencia: 23,
  },
  {
    nombre: "Manuel",
    apellido: "Gomez",
    cantidadAsistencia: 26,
  },
];

const Asistencia = ({ materia }) => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });
  const Notas = () => {
    return (
      <Stack direction={"column"}>
        <Stack
          direction={"column"}
          w={"100%"}
          p={6}
          bgColor={colors.blue1}
          gap={10}
          borderRadius={borders.borderRadius}
        >
          <Stack px={4}>
            <Text fontSize={sizes.miniTitle}>Lista de Asistencias</Text>
          </Stack>
          <Table size="sm" w={"100%"} variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Nombre del alumno</Th>
                <Th>Cantidad de Asistencias</Th>
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
                    <Td align="center" value={alumno.cantidadAsistencia}>
                      {alumno.cantidadAsistencia}
                    </Td>
                    {alumno.cantidadAsistencia > 24 ? (
                      <>
                        <Td align="center" color={"red"}>
                          Queda libre
                        </Td>
                      </>
                    ) : (
                      <>
                        <Td align="center" color={"green"}>
                          Cursando
                        </Td>
                      </>
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
              color={"white"}
            >
              Descargar PDF
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  };

  return <Notas />;
};

export default Asistencia;
