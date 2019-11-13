import React from 'react';

const NameCard = ({ name }) => {
    const {title, type} = name;

    return(
        <div className="name-card">
        <h1>{title}</h1>
        <div className="class">Class: {type}
        </div>
        </div>
    )
};

export default NameCard;