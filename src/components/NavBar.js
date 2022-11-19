import { Image, Stack, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "wouter";
import { colors, borders } from "../theme/theme";

const NavBar = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });
  return (
    <Stack
      bgColor={colors.blue5}
      w={"100%"}
      height={"150px"}
      borderRadius={borders.borderRadius}
      p={8}
      direction={direction}
      color="white"
    >
      <Image src="/images/logo.svg" alt="logo" width={"80px"} height={"80px"} />
      <Stack
        direction={direction}
        align={"center"}
        w={"100%"}
        justify={"center"}
        pr={36}
        gap={10}
      >
        <Link href="/home">Home</Link>
        <Link href="/materias">Materias</Link>
        <Link href="/notas">Notas</Link>
        <Link href="/mensajeria">Mensajería</Link>
        <Link href="/calendario-academico">Calendario académico</Link>
      </Stack>
    </Stack>
  );
};

export default NavBar;
