import React, { useState } from 'react';

    const NameForm = () => {
        const [teamName, addTeamName] = useState([{
            title: "",
            type: ""
           }
         ]);

        const ChangeHandler = e => {
            addTeamName({...teamName, [e.target.name]: e.target.value});
            console.log(e.target.name);
        };

        function submitForm(form) {
            let newName = makeJSON(form);
            let request = new XMLHttpRequest();

            request.open('POST', 'http://localhost:5000/api/teamNames');
            request.setRequestHeader('Content-Type', 'application/json');
            request.onreadystatechange = function(){
                if(request.readyState === 4 && request.status === 200) {
                    console.log(request)
                }
            };

            request.send(JSON.stringify(newName));

            function makeJSON(form) {
                return {
                    title: form.title.value,
                    type: form.type.value,
                }

            }

        }
            return (
                <div id="form">
                    <form onSubmit={submitForm(this)}>
                        <label htmlFor="title">Name</label>
                        <input id="name" type="text" name="title" onChange={ChangeHandler} value={teamName.title}/>
                        <label htmlFor="type">Type</label>
                        <input id="type" type="text" name="type" onChange={ChangeHandler} value={teamName.type}/>
                        <button type="submit">Add Name</button>
                    </form>
                </div>
            )
        };


    export default NameForm;

