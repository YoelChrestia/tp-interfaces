import { Image, Stack, useBreakpointValue, Link, RadioGroup, Radio, Button, Drawer, DrawerHeader, DrawerBody, useDisclosure, DrawerOverlay, DrawerContent } from "@chakra-ui/react";
import { Link as RouteLink, useLocation } from "wouter";
import { colors, borders } from "../theme/theme";
import React from "react";

const NavBar = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const [location, setLocation] = useLocation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');

  return(
    <>
    {direction === "row" ? <Stack
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
    </Stack> : 
    <>
      <Stack bg={colors.blue5} w="100%" height={"80px"} position="fixed" left={0} top={"0"}  zIndex={10} justify="space-between" align="center" direction="row" p="10px">
      <Image
          src="/images/logo.png"
          alt="logo"
          width={"64px"}
          height={"50px"}
        />
      <Image
          src="/images/menu-mobile.png"
          alt="logo"
          width={"40px"}
          height={"40px"}
          onClick={onOpen}
        />
      </Stack>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent  bgColor={colors.blue5}>
          <DrawerHeader ><Image
          src="/images/logo.png"
          alt="logo"
          width={"64px"}
          height={"50px"}
          margin="auto"
        /></DrawerHeader>
          <DrawerBody>
            <Stack w="100%" align="center" pb="10px">
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    }
    </>
  )
};

export default NavBar;
