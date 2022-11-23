import { Select, useBreakpointValue } from "@chakra-ui/react";
import { borders } from "../../theme/theme";

const MateriaFiltro = ({ materias, setMateriaFiltrada }) => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });
  return (
    <Select
      w={direction === "row" ? "40%" : "100%"}
      bgColor={"white"}
      size={"sm"}
      borderRadius={borders.borderRadius}
      onChange={(e) => setMateriaFiltrada(e.target.value)}
    >
      <option defaultChecked value={""}>
        Selecciona la materia
      </option>
      {materias.map((materia) => {
        return (
          <>
            <option value={materia}>{materia}</option>
          </>
        );
      })}
    </Select>
  );
};

export default MateriaFiltro;
