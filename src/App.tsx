import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Skills from "./components/Skills";
const App = () => {
  return (
    <Box
      component="div"
      sx={{
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Header />

      <Skills />
    </Box>
  );
};

export default App;
