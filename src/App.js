import React from "react";
import CustomNavbar from "./components/CustomNavbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import { HashRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <HashRouter>
        <CustomNavbar />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}
