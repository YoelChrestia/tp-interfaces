import { Stack } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Layout = ({children}) => {
  return (
    <Stack p={"30px"}>
      <NavBar />
      {children}
    </Stack>
  );
};

export default Layout;
