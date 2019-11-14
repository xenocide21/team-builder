import React, { useState } from 'react';
import './App.css';
import TeamNames from "./components/TeamNames";
import { Route } from "react-router-dom"
import FormComponent from "./components/FormComponent";

function App() {

  const [teamName, addTeamName] = useState([{
    title: "Cilica",
    type: "Beast Tamer"
  }
  ]);

  const addNewTeamName = addName => {
    const newName = {
      title: addName.title,
      type: addName.type,
    };
    addTeamName([...teamName, newName])
  };

  return (
      <div>
        <h1>Names</h1>
        <FormComponent addNewTeamName={addNewTeamName} />
        <Route exact path="/" component={TeamNames}/>

      </div>
  );
}

export default App;
