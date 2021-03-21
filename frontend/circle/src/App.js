import Navbar from "./components/navbar/navbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import LoginPage from "./pages/login/login";
import HomePage from "./pages/home/home";

function App() {
  useEffect(() => {
  })

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
        </Switch>
        <div class="footer">
          <p class="text-center text-muted">© Copyright 2021 - acha-bill</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
