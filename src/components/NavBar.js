import { Image, Stack, useBreakpointValue, Link } from "@chakra-ui/react";
import { Link as RouteLink, useLocation } from "wouter";
import { colors, borders } from "../theme/theme";

const NavBar = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const [location, setLocation] = useLocation();

  return (
    <Stack
      bgColor={colors.blue5}
      w={"100%"}
      height={"110px"}
      borderRadius={borders.borderRadius}
      px={8}
      direction={direction}
      color="white"
      align={"center"}
    >
      <Stack>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={"82px"}
          height={"64px"}
        />
      </Stack>
      <Stack
        direction={direction}
        align={"center"}
        w={"100%"}
        justify={"center"}
        pr={36}
        gap={10}
      >
        <RouteLink href="/home">
          <Link color={location === "/home" ? colors.buttonGreen : "white"}>
            Home
          </Link>
        </RouteLink>
        <RouteLink href="/materias">
          <Link color={location === "/materias" ? colors.buttonGreen : "white"}>
            Materias
          </Link>
        </RouteLink>
        <RouteLink href="/notas">
          <Link color={location === "/notas" ? colors.buttonGreen : "white"}>
            Notas
          </Link>
        </RouteLink>
        <RouteLink href="/mensajeria">
          <Link
            color={location === "/mensajeria" ? colors.buttonGreen : "white"}
          >
            Mensajería
          </Link>
        </RouteLink>
        <RouteLink href="/calendario-academico">
          <Link
            color={
              location === "/calendario-academico"
                ? colors.buttonGreen
                : "white"
            }
          >
            Calendario académico
          </Link>
        </RouteLink>
      </Stack>
    </Stack>
  );
};

export default NavBar;
