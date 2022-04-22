import { Component } from "react";
import React from 'react';
import './Counter.css';
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue:0
        };
    }
    changeStep =(value) =>{
        this.setState({
            stepValue: parseFloat(value)
        })
    }
    changeValue = (action) => {
     
        this.setState((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.stepValue ;
            } else if (action === 'reInit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }
            return ({
                counterValue: currentCounterValue
            });
        });
    };

    render() {
        return (
            <div className='counter'>
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                <Step changeStep={this.changeStep}/>
            </div>
        );
    }
}

// function Counter(props) {
//     return (
// <div className='counter'>
//     Counter 
//     <span className='value'> {props.initValue}</span>
// </div>
//     );
// }

export default Counter
