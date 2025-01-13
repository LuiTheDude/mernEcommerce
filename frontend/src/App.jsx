import { Box, Flex, HStack } from "@chakra-ui/react";
import { Route, Routes  } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar"; 
import { useColorModeValue } from "./components/ui/color-mode";

function App() {

  return (
    <Flex direction="column" minH="100vh">
      <Box flex="1" bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/create" element={<CreatePage />}/>
        </Routes>
      </Box>
    </Flex>
  )
}

export default App
