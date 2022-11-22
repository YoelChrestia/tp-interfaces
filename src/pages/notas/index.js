import { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import { borders, colors, sizes } from "../../theme/theme";
import MateriaFiltro from "../materias/materiaFiltro";

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

const materias = ["Matematica", "Fisica", "Fisica II"];

const Notas = () => {
  const [materiaFiltrada, setMateriaFiltrada] = useState("");
  const [materiaMostrar, setMateriaMostrar] = useState([]);

  useEffect(() => {
    let materiasFiltered = [...materias];

    if (materiaFiltrada === "default") {
      setMateriaMostrar(...materias);
    }

    if (materiaFiltrada && materiaFiltrada !== "default") {
      materiasFiltered = materias.filter(
        (materia) => materia === materiaFiltrada
      );
    }
    setMateriaMostrar(materiasFiltered);
  }, [materiaFiltrada, materias]);

  const Notas = () => {
    return (
      <Stack direction={"column"}>
        <MateriaFiltro
          materias={materias}
          setMateriaFiltrada={setMateriaFiltrada}
        />
        <Stack
          direction={"column"}
          w={"100%"}
          p={6}
          bgColor={colors.blue1}
          gap={10}
          borderRadius={borders.borderRadius}
        >
          <Stack px={4}>
            <Text fontSize={sizes.miniTitle}>Matemática 2do T.M</Text>
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
            <Button bgColor={"red"} alignSelf={"end"} w={"15%"} size={"md"}>
              Descargar PDF
            </Button>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          w={"100%"}
          p={6}
          bgColor={colors.blue1}
          gap={10}
          borderRadius={borders.borderRadius}
        >
          <Stack px={4}>
            <Text fontSize={sizes.miniTitle}>Física 4to T.T</Text>
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
            <Button bgColor={"red"} alignSelf={"end"} w={"15%"} size={"md"}>
              Descargar PDF
            </Button>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          w={"100%"}
          p={6}
          bgColor={colors.blue1}
          gap={10}
          borderRadius={borders.borderRadius}
        >
          <Stack px={4}>
            <Text fontSize={sizes.miniTitle}>Física 5to T.T</Text>
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
            <Button bgColor={"red"} alignSelf={"end"} w={"15%"} size={"md"}>
              Descargar PDF
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  };

  return <Notas />;
};

export default Notas;
