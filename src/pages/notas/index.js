import {
  Stack,
  useBreakpointValue,
  Table,
  Tbody,
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
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </Stack>
    );
  };

  return <Notas />;
};

export default Notas;
