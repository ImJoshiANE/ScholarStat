import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./App.css";
import Auth from "./components/Auth/Auth";

const App = () => {
  const [user, setUser] = useState("unknown");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Signed in");
      console.log(user);
      setUser(user);
    } else {
      console.log("Not signed in");
    }
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Auth />} />
        <Route path="/ScholarStat" element={user ? <Home /> : <Auth />} />
      </Routes>
    </Router>
  );
};

export default App;