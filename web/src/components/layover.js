import React, { Component } from 'react';

class Layover extends Component {
    constructor() {
		super();
		this.state = {
			high: '',
		};
	}

    handleClick = () => {
        this.setState({high:window.getSelection().toString()});
    }
     
    render() {
        return (
            <div>
                <div onMouseUp={this.handleClick}>
                example 1 2 3 jadsfjsdnfi
                xample 1 2 3 jadsfjsdnfi
                xample 1 2 3 jadsfjsdnfi
                xample 1 2 3 jadsfjsdnfi
                xample 1 2 3 jadsfjsdnfi
                xample 1 2 3 jadsfjsdnfi
                </div>
                <h1>
                {this.state.high}
                </h1> 
            </div>   
        );
    }
}

export default Layover;
