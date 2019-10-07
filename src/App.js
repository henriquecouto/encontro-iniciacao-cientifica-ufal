import React from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import Top from "./components/Top";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#fafafa" },
    secondary: { main: "#212121" },
    text: { secondary: "#fff" },
    tab: { background: "#bdbdbd", indicator: "#e0e0e0" }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Top />
      <Header />
      <Schedule />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
