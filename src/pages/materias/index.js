import { useEffect, useState } from "react";
import {
  Stack,
  Text,
  useBreakpointValue,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { colors, borders } from "../../theme/theme";
import { Link } from "wouter";
import MateriaFiltro from "./materiaFiltro";

const materias = [
  {
    nombre: "Matemática",
    curso: "2do",
    turno: "Mañana",
    desplegable: [
      {
        icono: <Image src={"/images/asistencias.png"} />,
        texto: "Asistencias",
        link: "/materias/Matematica",
      },
      {
        icono: <Image src={"/images/contenido.png"} />,
        texto: "Contenido",
        link: "/contenido/Matematica",
      },
      {
        icono: <Image src={"/images/notas.png"} />,
        texto: "Notas",
        link: "/notas/Matematica",
      },
      {
        icono: <Image src={"/images/mensajeria.png"} />,
        texto: "Mensajeria",
        link: "/mensajeria",
      },
    ],
  },
  {
    nombre: "Fisica",
    curso: "4to",
    turno: "Tarde",
    desplegable: [
      {
        icono: <Image src={"/images/asistencias.png"} />,
        texto: "Asistencias",
        link: "/materias/Fisica",
      },
      {
        icono: <Image src={"/images/contenido.png"} />,
        texto: "Contenido",
        link: "/contenido/Fisica",
      },
      {
        icono: <Image src={"/images/notas.png"} />,
        texto: "Notas",
        link: "/notas/Fisica",
      },
      {
        icono: <Image src={"/images/mensajeria.png"} />,
        texto: "Mensajeria",
        link: "/mensajeria",
      },
    ],
  },
  {
    nombre: "Fisica II",
    curso: "5to",
    turno: "Tarde",
    desplegable: [
      {
        icono: <Image src={"/images/asistencias.png"} />,
        texto: "Asistencias",
        link: "/materias/FisicaII",
      },
      {
        icono: <Image src={"/images/contenido.png"} />,
        texto: "Contenido",
        link: "/contenido/FisicaII",
      },
      {
        icono: <Image src={"/images/notas.png"} />,
        texto: "Notas",
        link: "/notas/FisicaII",
      },
      {
        icono: <Image src={"/images/mensajeria.png"} />,
        texto: "Mensajeria",
        link: "/mensajeria",
      },
    ],
  },
];

const nombreMaterias = () => {
  let mats = [];
  materias.map((materia) => {
    return mats.push(materia.nombre);
  });
  return mats;
};

const Materias = () => {
  const [materiaFiltrada, setMateriaFiltrada] = useState("");
  const [materiaMostrar, setMateriaMostrar] = useState([]);
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  useEffect(() => {
    let materiasFiltered = [...materias];

    if (materiaFiltrada === "default") {
      setMateriaMostrar(...materias);
    }

    if (materiaFiltrada && materiaFiltrada !== "default") {
      materiasFiltered = materias.filter(
        (materia) => materia.nombre === materiaFiltrada
      );
    }
    setMateriaMostrar(materiasFiltered);
  }, [materiaFiltrada, materias]);

  const Materias = () => {
    return (
      <Stack
        bgColor={colors.blue1}
        w={"100%"}
        direction={"column"}
        p={6}
        borderRadius={borders.borderRadius}
      >
        <Stack
          bgColor={colors.blue5}
          w={"100%"}
          py={4}
          px={4}
          borderRadius={borders.borderRadius}
        >
          <Text color={"white"}>Materias dictadas</Text>
        </Stack>

        <MateriaFiltro
          materias={nombreMaterias()}
          setMateriaFiltrada={setMateriaFiltrada}
        />

        <Stack>
          {materiaMostrar.map((materia) => {
            return (
              <>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <AccordionButton _hover={{ background: "transparent" }}>
                      <Stack
                        flex="1"
                        textAlign="left"
                        bgColor={colors.blue5}
                        color={"white"}
                        direction={"row"}
                        p={4}
                        borderRadius={borders.borderRadius}
                        justify={"space-between"}
                      >
                        <Stack direction={direction}>
                          <Text>{materia.nombre}</Text>
                          <Text>Año: {materia.curso}</Text>
                          <Text>Turno: {materia.turno}</Text>
                        </Stack>

                        <AccordionIcon color={colors.buttonGreen} />
                      </Stack>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Stack
                        spacing={3}
                        w={"100%"}
                        justify={"space-between"}
                        direction={direction === "row" ? "row" : "column"}
                      >
                        {materia.desplegable.map((desplegable, key) => {
                          return (
                            <Stack
                              key={key}
                              w={direction === "row" ? "25%" : "100%"}
                              h={"70px"}
                              bgColor={"white"}
                              align={"center"}
                              justify={"center"}
                              borderRadius={borders.borderRadius}
                              cursor="pointer"
                              direction={"row"}
                              _hover={{ color: colors.blue3 }}
                            >
                              {desplegable.icono}
                              <Text>
                                <Link href={desplegable.link}>
                                  {desplegable.texto}
                                </Link>
                              </Text>
                            </Stack>
                          );
                        })}
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </>
            );
          })}
        </Stack>
      </Stack>
    );
  };

  return <Materias />;
};

export default Materias;
