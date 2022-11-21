import { Stack, useBreakpointValue } from "@chakra-ui/react";
import { borders, colors } from "../../theme/theme";

const Notas = () => {

  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const Notas = () => {
    return <Stack direction={direction} w={"100%"}
    p={6}
    bgColor={colors.blue1}
    gap={10}
    borderRadius={borders.borderRadius}
    ></Stack>;
  };

  return <Notas />;
};

export default Notas;
