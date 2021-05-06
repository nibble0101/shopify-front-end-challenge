import React from "react";
import Main from "./main/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "../styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
