import { Stack } from "@chakra-ui/react";
import { useLocation } from "wouter";
import NavBar from "./NavBar";

const Layout = ({children}) => {

  const [location, setLocation] = useLocation();

  return (
    <>
    {
      location === '/' ? <>{children}</> : <Stack p={"30px"}><NavBar />{children}</Stack>
    } 
    </>
  );
};

export default Layout;
