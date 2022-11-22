import {
  Stack,
  useBreakpointValue,
  Table,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
} from "@chakra-ui/react";
import { borders, colors } from "../../theme/theme";

const Notas = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const Notas = () => {
    return (
      <Stack
        direction={direction}
        w={"100%"}
        p={6}
        bgColor={colors.blue1}
        gap={10}
        borderRadius={borders.borderRadius}
      >
        <Table size="sm" w={"100%"} variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Nombre del alumno</Th>
              <Th>Primera Nota</Th>
              <Th>Segunda Nota</Th>
              <Th>Tercera Nota</Th>
              <Th>Promedio</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td align="center">Pedro Gomez</Td>
              <Td align="center">6</Td>
              <Td align="center">7</Td>
              <Td align="center">10</Td>
              <Td align="center">{6 + 7 + 10}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Stack>
    );
  };

  return <Notas />;
};

export default Notas;
