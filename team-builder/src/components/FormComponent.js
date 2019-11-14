import React, { Component } from 'react';

class NameForm extends Component {
    state = {
        title: "",
        type: ""
    };

    nameChanged = (e) => {
        console.log("title changed: ", e.currentTarget.value);
        this.setState({
            title: e.currentTarget.value
        });
    };

    typeChanged = (e) => {
        console.log("type changed: ", e.currentTarget.value);
        this.setState({
            type: e.currentTarget.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit (title, type): (" + this.state.title + " , " + this.state.type + ")");
        let newName = this.makeForm(this.state.title, this.state.type);
        let request = new XMLHttpRequest();

        request.open('POST', 'http://localhost:5000/api/teamNames');
        request.setRequestHeader('Content-Type', 'application/json');
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200) {
                console.log(request)
            }
        };

        request.send(JSON.stringify(newName));
    };

    makeForm = (title, type) => {
        return {
            title: title,
            type: type
        };
    };

    render () {
        return (
            <div id="form">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="title">Name</label>
                    <input id="title" type="text" name="title" onChange={this.nameChanged} value={this.state.name}/>
                    <label htmlFor="type">Type</label>
                    <input id="type" type="text" name="type" onChange={this.typeChanged} value={this.state.type}/>
                    <button type="submit">Add Name</button>
                </form>
            </div>
        )
    }
}

export default NameForm;