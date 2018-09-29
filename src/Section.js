import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Section.css';

class Section extends Component {
    myOptions = this.props.options.map(option => {
        return (
            <img src={option.src} style={{padding:`${option.padding}px` || '0px'}} onClick={option.onClick} key={option.src} alt={option.src} />
        );
    });

    render(){
        return (
            <div className="section">
                <h2>{this.props.title}</h2>
                {this.myOptions}
            </div>
        );
    }
};

Section.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            padding: PropTypes.number
        })
    )
};

Section.defaultProps = {
    title: "",
    options: [
        {
            onClick: () => {},
            padding: 0
        }
    ]
};

export default Section;
