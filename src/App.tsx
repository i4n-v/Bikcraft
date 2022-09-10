import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Menu, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
