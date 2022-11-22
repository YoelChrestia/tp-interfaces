import { Select } from "@chakra-ui/react";
import { borders } from "../../theme/theme";

const NotasFiltro = ({ alumnos, setAlumnosFiltrados }) => {
  return (
    <Select
      w={"40%"}
      bgColor={"white"}
      size={"sm"}
      borderRadius={borders.borderRadius}
      onChange={(e) => setAlumnosFiltrados(e.target.value)}
    >
      <option defaultChecked value={"default"}>
        Seleccione el alumno
      </option>
      {alumnos.map((alumno) => {
        return (
          <>
            <option value={alumno}>{alumno}</option>
          </>
        );
      })}
    </Select>
  );
};

export default NotasFiltro;
