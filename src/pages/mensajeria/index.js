import { Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { borders, colors } from "../../theme/theme";

const Mensajeria = () => {
  
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const Mensajeria = () => {
    return <Stack direction={direction} w={"100%"}
    p={6}
    bgColor={colors.blue1}
    gap={10}
    borderRadius={borders.borderRadius}
    >
<TableContainer bg={"white"} borderRadius={"12px"} w={"100%"}>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th color={colors.buttonGreen}>Remitente</Th>
            <Th color={colors.buttonGreen}>Asunto</Th>
            <Th isNumeric color={colors.buttonGreen}>Fecha</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>Julian Bravo</Td>
            <Td>Recuperatorio</Td>
            <Td isNumeric>20-11-22</Td>
          </Tr>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>Rocío Oliva</Td>
            <Td>Consultita</Td>
            <Td isNumeric>19-11-22</Td>
          </Tr>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>María Paz</Td>
            <Td>Trabajo Practico</Td>
            <Td isNumeric>19-11-22</Td>
          </Tr>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>María Paz</Td>
            <Td>Trabajo Practico</Td>
            <Td isNumeric>19-11-22</Td>
          </Tr>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>María Paz</Td>
            <Td>Trabajo Practico</Td>
            <Td isNumeric>19-11-22</Td>
          </Tr>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>María Paz</Td>
            <Td>Trabajo Practico</Td>
            <Td isNumeric>19-11-22</Td>
          </Tr>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>María Paz</Td>
            <Td>Trabajo Practico</Td>
            <Td isNumeric>19-11-22</Td>
          </Tr>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>María Paz</Td>
            <Td>Trabajo Practico</Td>
            <Td isNumeric>19-11-22</Td>
          </Tr>
          <Tr _hover={{background : "rgb(150,150,150,0.1)", cursor : "pointer"}}>
            <Td>María Paz</Td>
            <Td>Trabajo Practico</Td>
            <Td isNumeric>19-11-22</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>


    </Stack>;
  };

  return <Mensajeria />;
};

export default Mensajeria;
