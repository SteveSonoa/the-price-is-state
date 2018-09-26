import React, {Component} from 'react';

const Section = props => {
    const options = props.options.map(option => {
        return (
            <img src={option.img} onClick={option.onClick} />
        );
    });

    return(
        <div className="section">
          <h2>{props.title}</h2>
          {options}
        </div>
    );
};

export default Section;
