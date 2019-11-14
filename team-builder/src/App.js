import React from 'react';
import './App.css';
import TeamNames from "./components/TeamNames";
import Name from "./components/Name"
import { Route } from "react-router-dom"
import FormComponent from "./components/FormComponent";

function App() {

  return (
      <div id="main">
        <h1>Sword Art Online</h1>
        <FormComponent />
        <Route exact path="/" component={TeamNames}/>
        <Route path="/names/:id" render={props => (<Name {...props}/>)}/>

      </div>
  );
}

export default App;
