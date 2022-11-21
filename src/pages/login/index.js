import {
  Stack,
  Image,
  Text,
  Box,
  useBreakpointValue,
  Input,
} from "@chakra-ui/react";
import { colors, sizes, borders, boxShadow } from "../../theme/theme";
import CustomButton from "../../components/CustomButton";

const Login = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  return (
    <Stack
      bgColor={"blue.100"}
      width={"100vw"}
      height={"100vh"}
      bgImage={"/images/bglogin.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      direction={direction}
    >
      <Stack
        w={"100%"}
        h={"100%"}
        bgColor={colors.blueOpacity}
        p={"30px"}
        align={direction === "column" ? "center" : "none"}
      >
        <Stack
          direction={direction}
          display={"flex"}
          justify={"space-between"}
          align={direction === "row" ? "start" : "center"}
          h={direction === "row" ? "160px" : "auto"}
          gap={direction === "row" ? "0" : "5"}
        >
          <Image
          src="/images/logo.png"
          alt="logo"
          width={"82px"}
          height={"64px"}
          marginRight={direction === "row" ? "50px" : "0"}
        />
          <Text
            fontSize={direction === "row" ? sizes.hiperTitle : sizes.title}
            w={direction === "row" ? "40%" : "90%"}
            textAlign={"center"}
            color={"white"}
            fontWeight={400}
          >
            Sistema de gestión de contenidos Técnica Martínez de alzaga -
            DOCENTE
          </Text>
          <CustomButton
            bgColor={colors.blue3}
            link={"/"}
            texto={"Solicitar acceso"}
            color={"white"}
          />
        </Stack>
        <Stack w={"100%"} align={"center"}>
          <Box
            bgColor={colors.blue5}
            w={direction === "row" ? "450px" : "300px"}
            h={direction === "row" ? "400px" : "auto"}
            borderRadius={borders.borderRadius}
            align={"center"}
            mt={100}
            p={6}
            boxShadow={boxShadow}
          >
            <Text fontSize={sizes.miniTitle} color={"white"} align={"center"}>
              Acceso
            </Text>
            <Stack w={"100%"} align={"center"} my={10} gap={8} px={6}>
              <Input
                placeholder="Usuario"
                bgColor={"white"}
                borderRadius={borders.borderRadius}
                border={"none"}
                _focusVisible={{ borderColor: "none" }}
              />
              <Input
                type={"password"}
                placeholder="Contraseña"
                bgColor={"white"}
                borderRadius={borders.borderRadius}
                border={"none"}
                _focusVisible={{ borderColor: "none" }}
              />
            </Stack>
            <CustomButton
              bgColor={colors.buttonGreen}
              link={"/home"}
              texto={"Ingresar"}
              color={"white"}
            />
            <Text fontSize={sizes.details} color={"white"} mt={4} opacity={0.4}>
              Olvidaste tu contraseña?
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
