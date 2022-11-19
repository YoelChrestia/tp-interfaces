import { Stack } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Layout = ({ Component }) => {
  return (
    <Stack p={"30px"}>
      <NavBar />
      {Component}
    </Stack>
  );
};

export default Layout;
