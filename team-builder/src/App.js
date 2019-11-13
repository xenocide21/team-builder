import React from 'react';
import './App.css';
import TeamNames from "./components/TeamNames";
import { Route } from "react-router-dom"

function App() {
  return (
<Route exact path="/" component={TeamNames}/>
  );
}

export default App;
