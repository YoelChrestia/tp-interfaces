import { Text, Stack, Image, useBreakpointValue, Box } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";
import { colors, sizes, calendarButtons, borders } from "../../theme/theme";

export const ListaDeEventos = [
  "Cumpleaños Juana 1ero - 20 de Noviembre",
  "Clase de 2do TM - 25 de Noviembre",
  "Examenes finales - 30 de Noviembre",
  "Acto de la bandera - 2 de Diciembre",
  "Acto de fin de año - 8 de Diciembre",
  "Cumpleaños Pedro 3ero - 10 de Diciembre",
  "Fin de clases - 15 de Diciembre",
];

const calButtons = [
  { text: "Eventos", color: calendarButtons.event },
  { text: "Cumpleaños", color: calendarButtons.birthday },
  { text: "Actos", color: calendarButtons.acto },
  { text: "Examenes", color: calendarButtons.exam },
  { text: "Finales", color: calendarButtons.finals },
];

const Calendar = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const Calendar = () => {
    return (
      <Stack
        direction={direction}
        w={"100%"}
        justify={"space-between"}
        p={6}
        bgColor={colors.blue1}
        gap={10}
        borderRadius={borders.borderRadius}
      >
        <Stack w={direction === "row" ? "25%" : "100%"} p={6}>
          <Text fontSize={sizes.miniTitle} mb={4} color={colors.blue4}>
            Próximos eventos
          </Text>
          <Stack>
            {ListaDeEventos.map((evento) => {
              return (
                <Stack direction={"row"} align={"center"}>
                  <Box
                    bgColor={colors.blue4}
                    width={"10px"}
                    height={"10px"}
                    borderRadius={"50%"}
                  />
                  <Text cursor={"pointer"} _hover={{ color: colors.blue3 }}>
                    {evento.length > 30 ? evento.slice(0, 30) + "..." : evento}
                  </Text>
                </Stack>
              );
            })}
          </Stack>
        </Stack>

        <Stack>
          <Image
            src={"/images/calendar.png"}
            alt={"calendarioAcademico"}
            width={"750px"}
            height={"100%"}
            alignSelf="center"
            borderRadius={borders.borderRadius}
          />
        </Stack>

        <Stack direction={"column"} justify={"center"}>
          {calButtons.map((button) => {
            return (
              <>
                <CustomButton
                  bgColor={button.color}
                  link={"/calendario-academico"}
                  color={"black"}
                  texto={button.text}
                  width={direction === "row" ? "150px" : "100%"}
                />
              </>
            );
          })}
        </Stack>
      </Stack>
    );
  };

  return <Calendar />;
};

export default Calendar;
