import Layout from "../../components/Layout";
import {
  Stack,
  Text,
  useBreakpointValue,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { colors, borders } from "../../theme/theme";
import { Link } from "wouter";

const materias = [
  {
    icono: <Icon src={"/images/fisica.png"} />,
    nombre: "Fisica",
    curso: "2do",
    turno: "Mañana",
    desplegable: [
      {
        icono: <Icon src={"/images/asistencias.png"} />,
        texto: "Asistencias",
        link: "/",
      },
      {
        icono: <Icon src={"/images/contenido.png"} />,
        texto: "Contenido",
        link: "/",
      },
      {
        icono: <Icon src={"/images/notas.png"} />,
        texto: "Notas",
        link: "/notas",
      },
      {
        icono: <Icon src={"/images/mensajeria.png"} />,
        texto: "Mensajeria",
        link: "/mensajeria",
      },
    ],
  },
  {
    icono: <Icon src={"/images/fisica.png"} />,
    nombre: "Fisica",
    curso: "2do",
    turno: "Mañana",
    desplegable: [
      {
        icono: <Icon src={"/images/asistencias.png"} />,
        texto: "Asistencias",
        link: "/",
      },
      {
        icono: <Icon src={"/images/contenido.png"} />,
        texto: "Contenido",
        link: "/",
      },
      {
        icono: <Icon src={"/images/notas.png"} />,
        texto: "Notas",
        link: "/notas",
      },
      {
        icono: <Icon src={"/images/mensajeria.png"} />,
        texto: "Mensajeria",
        link: "/mensajeria",
      },
    ],
  },
  {
    icono: <Icon src={"/images/fisica.png"} />,
    nombre: "Fisica",
    curso: "2do",
    turno: "Mañana",
    desplegable: [
      {
        icono: <Icon src={"/images/asistencias.png"} />,
        texto: "Asistencias",
        link: "/",
      },
      {
        icono: <Icon src={"/images/contenido.png"} />,
        texto: "Contenido",
        link: "/",
      },
      {
        icono: <Icon src={"/images/notas.png"} />,
        texto: "Notas",
        link: "/notas",
      },
      {
        icono: <Icon src={"/images/mensajeria.png"} />,
        texto: "Mensajeria",
        link: "/mensajeria",
      },
    ],
  },
];

const Materias = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });
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
          px={8}
          borderRadius={borders.borderRadius}
        >
          <Text color={"white"}>Materias dictadas</Text>
        </Stack>

        <Stack>
          {materias.map((materia) => {
            return (
              <>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      <Stack
                        flex="1"
                        textAlign="left"
                        bgColor={colors.blue5}
                        color={"white"}
                        direction={direction}
                        p={4}
                        borderRadius={borders.borderRadius}
                        justify={"space-between"}
                      >
                        <Stack direction={"row"}>
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
                        direction={"row"}
                        justify={"space-between"}
                      >
                        {materia.desplegable.map((desplegable) => {
                          return (
                            <Stack
                              w={"25%"}
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

  return <Layout Component={<Materias />} />;
};

export default Materias;
