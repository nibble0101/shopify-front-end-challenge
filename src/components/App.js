import React from "react";
import Main from "./main/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
