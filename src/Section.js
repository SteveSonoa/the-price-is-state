import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Section.css';

class Section extends Component {
    componentDidMount() {
        const tempState = {};
        for (let i = 0; i < this.props.options.length; i++) {
            tempState[this.props.options[i].src] = true;
        }
        this.setState({...tempState});
    }

    myOptions = this.props.options.map(option => {
        return (
            <img src={option.src} style={{padding:`${option.padding}px` || '0px' }} onClick={() => {if(this.state[option.src]) {option.onClick(option.amount); this.setState({[option.src]: false});}}} key={option.src} alt={option.src} />
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
            padding: PropTypes.number,
            amount: PropTypes.number
        })
    )
};

Section.defaultProps = {
    title: "",
    options: [
        {
            onClick: () => {},
            padding: 0,
            amount: 0
        }
    ]
};

export default Section;
