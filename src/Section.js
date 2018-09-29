import React from 'react';
import './Section.css';

const Section = props => {
    const myOptions = props.options.map(option => {
        return (
            <img src={option.src} style={{padding:option.padding || '0px'}} onClick={option.onClick} />
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
