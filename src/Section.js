import React, {Component} from 'react';

const Section = props => {
    const myOptions = props.options.map(option => {
        return (
            <img src={option.src} onClick={option.onClick} />
        );
    });

    return (
        <div className="section">
            <h2>{props.title}</h2>
            {myOptions}
        </div>
    );
};

export default Section;
