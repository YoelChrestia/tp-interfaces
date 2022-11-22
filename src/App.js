import { ChakraProvider } from "@chakra-ui/react"
import "./App.css"
import Layout from "./components/Layout";
import { Router } from "./Router"

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Router/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
