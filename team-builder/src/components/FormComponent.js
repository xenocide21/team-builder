import React, { useState } from 'react';


    const NameForm = props => {
        const [teamName, addTeamName] = useState({title: "", type: ""});

        const ChangeHandler = e => {
            addTeamName({...teamName, [e.target.name]: e.target.value});
            console.log(e.target.name);
        };

        const subForm = e =>{
            e.preventDefault();
            props.addNewTeamName(teamName);
            addTeamName({title: "", type: ""})
        };

        return(
            <form onSubmit={subForm}>
                <label htmlFor="title">Name</label>
                <input id="name" type="text" name="name" onChange={ChangeHandler} value={teamName.title}/>
                <label htmlFor="type">Type</label>
                <input id="type" type="text" name="type" onChange={ChangeHandler} value={teamName.type}/>
                <button type="submit">Add Name</button>
            </form>
        )
    };

    export default NameForm

