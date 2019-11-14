import React from 'react';
import './App.css';
import TeamNames from "./components/TeamNames";
import { Route } from "react-router-dom"
import FormComponent from "./components/FormComponent";

function App() {
  // const [namesList, addNames] = useState([{
  //   id: 6,
  //   title: "Example Name",
  //   type: "Example Type",
  // }
  // ]);
  //
  // const addNewName = names => {
  //   const newNames = {
  //     id: Date.now(),
  //     title: names.title,
  //     type: names.type
  //   };
  //   addNames([...namesList, newNames])
  // };

  return (
      <div>
        <h1>Names</h1>
        <FormComponent />
        <Route exact path="/" component={TeamNames}/>

      </div>
  );
}

export default App;
