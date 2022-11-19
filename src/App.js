import { ChakraProvider } from "@chakra-ui/react";
import Login from './pages/login/index'
import './App.css'


function App() {
  return (
    <ChakraProvider>
        <Login/>
    </ChakraProvider>
   
  );
}

export default App;
