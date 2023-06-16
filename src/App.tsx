import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SearchSearvice from "./components/SearchSearvice";
import TrustedAssociate from "./components/TrustedAssociate";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SearchSearvice />
      <TrustedAssociate />
      <Features />
    </div>
  );
}

export default App;
