import React, { useState } from 'react';

import Form from './Form';

import './App.css';

const App = () => {
  const [id, setId] = useState(2);
  const [members, setMembers] = useState([
    { id: '1', name: "ashley", email: "ashley@test.com", role: "code wizard" }
  ]);

  console.log("Members: ", members);

  return (
    <>
      <Form members={members} id={id} setMembers={setMembers} setId={setId} />
      <br />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          { 
            members.map((member) => {
              return (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.role}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App;