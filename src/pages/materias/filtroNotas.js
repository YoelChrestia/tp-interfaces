import { Select } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { borders } from "../../theme/theme";

export const FiltroNota = ({ materias, value }) => {

  const [location, setLocation] = useLocation();

  return (
    <Select
      w={"40%"}
      bgColor={"white"}
      size={"sm"}
      borderRadius={borders.borderRadius}
      onChange={(e) => setLocation(`/notas/${e.target.value}`)}
      value={value}
    >
      <option value={""}>
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
