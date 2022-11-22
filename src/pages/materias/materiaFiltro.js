import { Select } from "@chakra-ui/react";
import { borders } from "../../theme/theme";

const MateriaFiltro = ({ materias, setMateriaFiltrada }) => {
  return (
    <Select
      w={"40%"}
      bgColor={"white"}
      size={"sm"}
      borderRadius={borders.borderRadius}
      onChange={(e) => setMateriaFiltrada(e.target.value)}
    >
      <option defaultChecked value={"default"}>
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
