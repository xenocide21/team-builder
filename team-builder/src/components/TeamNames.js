import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default class NamesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: []
        };
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/teamNames`)
            .then(response => {
                console.log(response);
                this.setState(()=>({names: response.data}));
            })
            .catch(err => {console.error('Error communicating with the server', err);
            })
    }
    render() {
        return (
            <div className="names-list">
                {this.state.names.map(name => (
                <NameDetails key={name.id} name={name}/>
                ))}
            </div>
            );
        };
     }

     function NameDetails({name}) {
        const { id } = name;
        return(
            <NavLink to={`/names/${id}`}>
                <null name={name}/>
            </NavLink>
        );
        }
