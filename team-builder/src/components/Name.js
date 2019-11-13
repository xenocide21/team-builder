import React, { Component } from 'react';
import axios from 'axios';
import NameCard from './NameCard';

export default class Name extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null
        };
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchName(id);
    };

    fetchName = id => {
        axios
            .get(`http://localhost:5000/api/teamNames/${id}`)
            .then(response => {
                console.log(response);
                this.setState(()=>({name: response.data}));
            })
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        if (!this.state.name) {
            return <div>Please wait...</div>
        }
    }
}