import { Stack, useBreakpointValue } from "@chakra-ui/react";
import { useLocation } from "wouter";
import NavBar from "./NavBar";

const Layout = ({children}) => {

  const [location, setLocation] = useLocation();

  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  return (
    <>
    {
      location === '/' ? <>{children}</> : <Stack p={"30px"} pt={direction === "column" && "85px"}><NavBar />{children}</Stack>
    } 
    </>
  );
};

export default Layout;
